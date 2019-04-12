$(document).ready(function () {
    var timeLeft = 10;
    var timer;
    //controls the behavior of the click on Start
    $('#startButton').on('click', function () {

        $('#startButton').hide();
        $('#submitButton').append('<button type="button" class="submit-button btn btn-secondary btn-lg ">Submit</button>');
        timer = setInterval(timeIt, 1000);
    });

    //Timing function
    function timeIt() {
        timeLeft--;
        $('#timer').html(timeLeft);

        if (timeLeft === 0) {
            clearInterval(timer);
        }
    };

});