$(document).ready(function() {
    
    var targetNumber = Math.floor(Math.random() * (121-19+1) + 19);
    $("#number-to-guess").text(targetNumber);

    var counter = 0;
    var chakraNumber = Math.floor(Math.random() * 12) + 1;
    var chakraNumberTwo = Math.floor(Math.random() * 12) + 1;
    var chakraNumberThree = Math.floor(Math.random() * 12) + 1;
    var chakraNumberFour = Math.floor(Math.random() * 12) + 1;

    $("#chakra").on("click", function () {
      counter += chakraNumber;
      $("#user-total").html(counter);
    });
    $("#chakraTwo").on("click", function () {
      counter += chakraNumberTwo;
      $("#user-total").html(counter);
    });
    $("#chakraThree").on("click", function () {
      counter += chakraNumberThree;
      $("#user-total").html(counter);
    });
    $("#chakraFour").on("click", function () {
      counter += chakraNumberFour;
      $("#user-total").html(counter);
    });

    var alignments = [];
    var failures = [];
    if (counter === targetNumber) {
      console.log("Counter: " + counter);
      console.log("Target: " + targetNumber);
      var win = 0;
      wins++;
      $("#user-total").html("You have aligned your chakras!");
      wins.push(alignnments);
      reset ();
    }

    else if (counter >= targetNumber) {
      var loss = 0;
      loss++;
      $("#user-total").html("You've failed to restore balance, try again!");
      loss.push(failures);
      reset ();
    }

    function reset () {
    }

  });