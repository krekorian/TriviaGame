$(document).ready(function () {
    //Initial vales
    var timeLeft = 60;
    var timer;
    var arrayElement;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var noAnswer = 0;
    //Defining answer library
    var questions = [{ question1: "Who discovered penicillin?", answer1: "Edison", answer2: "Fleming", answer3: "Tesla", answer4: "Jenner" }, { question2: "Who wrote Julius Caesar, Macbeth and Hamlet?", answer1: "Shakespeare", answer2: "Charles Dickens", answer3: "R.J. Wells", answer4: "Lord Bayron" }, { question3: "Where was Lope de Vega born?", answer1: "Paris", answer2: "Barcelona", answer3: "Buenes Aires", answer4: "Madrid" }, { question4: "When did the First World War start?", answer1: "1913", answer2: "1914", answer3: "1915", answer4: "1916" }, { question5: "What does the roman numeral C represent?", answer1: "5", answer2: "10", answer3: "50", answer4: "100" }, { question6: "Who painted the Mona Lisa?", answer1: "Raphael", answer2: "Da Vinci", answer3: "Michael Angelo", answer4: "Donatello" }, { question7: "When did the American Civil War end?", answer1: "1864", answer2: "1865", answer3: "1866", answer4: "1867" }];
    var answer = ["Fleming", "Shakespeare", "Madrid", "1914", "100", "Da Vinci", "1865"];

    //controls the behavior of the click on Start
    $('#startButton').on('click', function () {

        $('#startButton').hide();
        $('#submitButton').append('<button type="button" class="submit-button btn btn-secondary btn-lg ">Submit</button>');
        $('#timing-frame').append('<h2>Time Remaining: <span id="timer">60</span> Seconds</h2>');
        $('#main-frame').addClass("main-content-frame1");
        timer = setInterval(timeIt, 1000);
        displayQuestions();
    });

    //Timing function
    function timeIt() {
        timeLeft--;
        $('#timer').html(timeLeft);

        if (timeLeft === 0) {
            clearInterval(timer);
            query_answers();
            getResults();

        }
    };

    //function to show results
    function getResults() {
        $('#submitButton').hide();
        $('#timing-frame').hide();
        $('#result-page').empty();
        $('#main-frame').removeClass("main-content-frame1");
        $('#result-page').append('<h2> Correct: ' + correctAnswer + '</h2>');
        $('#result-page').append('<h2> Incorrect: ' + incorrectAnswer + '</h2>');
        $('#result-page').append('<h2> Unanswered: ' + noAnswer + '</h2>');
    };

    //Submit button
    $('#submitButton').on('click', function () {

        console.log(noAnswer);
        console.log(correctAnswer);
        console.log(incorrectAnswer);
        query_answers();
        getResults();
    });

    //display questions
    function displayQuestions() {
        for (i = 0; i < (questions.length); i++) {
            arrayElement = questions[i];


            $('#result-page').append('<h2>' + (arrayElement["question" + (i + 1)]) + '</h2>');

            $('#result-page').append('<div class="answer-display>');
            for (a = 1; a < (Object.keys(questions[i]).length); a++) {
                $('#result-page').append('<input  type="radio" id="radio' + a + '" name="radio_q' + (i + 1) + '" value="' + (arrayElement["answer" + a]) + '"/><label for="radio' + a + '">' + (arrayElement["answer" + a]) + "   " + '</label>');
            }
            $('#result-page').append('</Div>');

        }
    };
    //check the answer
    function query_answers() {
        for (var n = 1; n < (questions.length + 1); n++) {
            var rd_button = "radio_q" + n;
            var val = $('input[name=' + rd_button + ']:checked').val();
            console.log(val);
            if (val === undefined) {
                noAnswer++;
            }
            else if (val === answer[(n - 1)]) {
                correctAnswer++;
            }
            else if (val !== answer[(n - 1)]) {
                incorrectAnswer++;
            }
        }
    }

});