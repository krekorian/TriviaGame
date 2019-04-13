$(document).ready(function () {
    var timeLeft = 100;
    var timer;
    var arrayElement;
    var j = 1;
    var v;
    var questions = [{ question1: "Who discovered penicillin?", answer1: "Edison", answer2: "Fleming", answer3: "Tesla", answer4: "Jenner" }, { question2: "Who wrote Julius Caesar, Macbeth and Hamlet?", answer1: "Shakespeare", answer2: "Charles Dickens", answer3: "R.J. Wells", answer4: "Lord Bayron" }, { question3: "Where was Lope de Vega born?", answer1: "Paris", answer2: "Barcelona", answer3: "Buenes Aires", answer4: "Madrid" }, { question4: "When did the First World War start?", answer1: "1914", answer2: "1915", answer3: "1916", answer4: "1913" }, { question5: "What does the roman numeral C represent?", answer1: "5", answer2: "10", answer3: "50", answer4: "100" }, { question6: "Who painted the Mona Lisa?", answer1: "Raphael", answer2: "Da Vinci", answer3: "Michael Angelo", answer4: "Donatello" }, { question7: "When did the American Civil War end?", answer1: "1864", answer2: "1865", answer3: "1866", answer4: "1867" }];
    //console.log(questions.length);
    //arrayElement = questions[0];
    // console.log(arrayElement["question" + j]);

    //controls the behavior of the click on Start
    $('#startButton').on('click', function () {

        $('#startButton').hide();
        $('#submitButton').append('<button type="button" class="submit-button btn btn-secondary btn-lg ">Submit</button>');
        $('#timing-frame').append('<h2>Time Remaining: <span id="timer">10</span> Seconds</h2>');
        $('#main-frame').removeClass("main-content-frame");
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
            getResults();

        }
    };

    //function to show results
    function getResults() {
        $('#submitButton').hide();
        $('#timing-frame').hide();
        $('#result-page').empty();
        $('#result-page').append('<h2> Corrent: ' + '</h2>');
        $('#result-page').append('<h2> Incorrent: ' + '</h2>');
        $('#result-page').append('<h2> Unanswered: ' + '</h2>');
    };

    function displayQuestions() {
        for (i = 0; i < (questions.length); i++) {
            arrayElement = questions[i];
            // console.log(arrayElement);
            $('#result-page').append('<h2>' + (arrayElement["question" + (i + 1)]) + '</h2>');
            // console.log('<h1>' + (arrayElement["question" + (i + 1)]) + '</h1>');
            $('#result-page').append('<div class="answer-display>');
            for (a = 1; a <= 4; a++) {
                //arrayElement = questions[(a - 1)];
                console.log(arrayElement["answer" + a]);

                $('#result-page').append('<input  type="radio" id="radio' + a + '" name="radio" value="' + a + '/><label for="radio' + a + '">' + (arrayElement["answer" + a]) + "   " + '</label>');

            }
            $('#result-page').append('</Div>');
            // <div>

        }
    };

});