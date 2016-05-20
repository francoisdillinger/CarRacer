$(document).ready(function(){
    
    
    
    // Function runs when the 'go' button is clicked
    $('#go').on('click', function(){
        // This function checks to see if isComplete is false. If so it changes it to true
        // so that the first car will have the 'first' place and the second car will have the
        // value of place set to 'second'. Basically a function that changes the value depending on
        // the what the boolean is since you dont know ahead of time which car will win.
        var checkIfComplete = function(){
        if(isComplete == false){
            isComplete == true;
        }
        else{
            place = 'second';
        }
    }
        // Setting value for the width of the car
        var carWidth = $('#car1').width();
        // Gets value of the screen minus the car width/length. This way the car will stop before going off screen
        var raceTrackWidth = $(window).width() - carWidth;
        // Setting a random number for the time it takes the car to move across the screen
        var raceTime1 = Math.floor((Math.random() * 5000) + 1);
        var raceTime2 = Math.floor((Math.random() * 5000) + 1);
        // Setting initial boolean value of isComplete variable
        var isComplete = false;
        // Setting initial value of 'place' variable that will be changed by the isComplete function
        var place = 'first';
    // Animating the first car to move left across the width of the screen but not more than the screen width
    // so that is stays on screen
    $('#car1').animate({
        left: raceTrackWidth
    // setting the time it takes to complete the animation
    },raceTime1, function(){
        // Runs the isComplete function and sets the value for the variables in the following string
        // that gets added to the span
        checkIfComplete();
        $('#raceInfo1 span').text('Finished in '+ place + ' place and clocked in at ' + raceTime1 + ' milliseconds!')
    });
    // Same for the second car
    $('#car2').animate({
        left: raceTrackWidth
    },raceTime2, function(){
        checkIfComplete();
        $('#raceInfo2 span').text('Finished in '+ place + ' place and clocked in at ' + raceTime2 + ' milliseconds!')
    });
});
    // Reset button code that basically resets the span text to empty and puts the cars back to the other side of the page
    $('#reset').on('click', function(){
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
    });
})
