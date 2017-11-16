$(document).ready(function () {

  var targetNumber = Math.floor(Math.random() * (121 - 19 + 1) + 19);
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var chakraNumber = Math.floor(Math.random() * 12) + 1;
  var chakraNumberTwo = Math.floor(Math.random() * 12) + 1;
  var chakraNumberThree = Math.floor(Math.random() * 12) + 1;
  var chakraNumberFour = Math.floor(Math.random() * 12) + 1;

  $("#chakra").on("click", function () {
    counter += chakraNumber;
    $("#user-total").html(counter);
    counterValue ();
  });
  $("#chakraTwo").on("click", function () {
    counter += chakraNumberTwo;
    $("#user-total").html(counter);
    counterValue ();
  });
  $("#chakraThree").on("click", function () {
    counter += chakraNumberThree;
    $("#user-total").html(counter);
    counterValue ();
  });
  $("#chakraFour").on("click", function () {
    counter += chakraNumberFour;
    $("#user-total").html(counter);
    counterValue ();
  });

  var alignments = [];
  var failures = [];

  function counterValue() {
    console.log("Counter: " + counter);
    console.log("Target: " + targetNumber);
    if (counter == targetNumber) {
      var win = 0;
      wins++;
      $("#user-total").html("You've aligned your chakras!");
      wins.push(alignnments);
      initGame();
    } else if (counter >= targetNumber) {
      var loss = 0;
      loss++;
      $("#user-total").html("You've failed to restore balance, try again!");
      loss.push(failures);
      initGame();
    }
  }

  function initGame() {
    targetNumber = Math.floor(Math.random() * (121 - 19 + 1) + 19);
    counter = 0;
    chakraNumber = Math.floor(Math.random() * 12) + 1;
    chakraNumberTwo = Math.floor(Math.random() * 12) + 1;
    chakraNumberThree = Math.floor(Math.random() * 12) + 1;
    chakraNumberFour = Math.floor(Math.random() * 12) + 1;
    alignments = [];
    failures = [];
    $("#score").html("<p>Wins: " + wins + "</p>" +
      "<br><p>Losses: " + loss + "</p>")
  }

});