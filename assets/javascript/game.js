$(document).ready(function() {
    //set global variables
    var computerValue = 0;
    var playerValue = 0;
    var wins = 0;
    var loss = 0;

    $("#rules").click(function() {
        $("#rules-expanded").slideToggle('slow');
    })

    var reset = function() {
        computerGuess();
        getCrystalValues();
        playerValue = 0;
    }

    $("#wins").text(" " + wins);
    $("#losses").text(" " + loss);

    computerGuess = function() {
        guess = Math.floor(Math.random() * 120) + 19;
        computerValue = guess;
        $("#computer-guess").text(computerValue);

    }

    computerGuess();
    console.log(computerValue);

    getCrystalValues = function() {
        for (i = 1; i <= 4; i++) {
            crystalValue = Math.floor(Math.random() * 12) + 1;

            $("#gem-" + i).attr("value", crystalValue);
            console.log(crystalValue);
        }
    }
    getCrystalValues();

    $(".gems").on("click", function() {
        stringValue = $(this).attr("value");

        playerValue += parseInt(stringValue, 10);


        if (playerValue === computerValue) {
            wins++;
            $("#wins").text(" " + wins);
            reset();

        } else if (playerValue > computerValue) {
            loss++;
            $("#losses").text(" " + loss);
            reset();
        }
        $("#animalNum").text(playerValue);

    })
});
