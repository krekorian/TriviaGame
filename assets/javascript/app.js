$(document).ready(function () {
    var timeLeft = 10;
    var timer;
    //controls the behavior of the click on Start
    $('#startButton').on('click', function () {

        $('#startButton').hide();
        $('#submitButton').append('<button type="button" class="submit-button btn btn-secondary btn-lg ">Submit</button>');
        $('#timing-frame').append('<h2>Time Remaining: <span id="timer">10</span> Seconds</h2>');
        timer = setInterval(timeIt, 1000);
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
        $('#result-page').append('<h2> Corrent: ' + '</h2>');
        $('#result-page').append('<h2> Incorrent: ' + '</h2>');
        $('#result-page').append('<h2> Unanswered: ' + '</h2>');
    };

});