
        // The variables for the wins and losses.
        var wins = 0;
        var losses = 0;

        // Variable for your score.
        var score = 0;

        // Counter to add to score.
        var counter = 0;

        // The variable that pulls a random number for the objective of the game.
        var objective = Math.floor(Math.random() * 121 + 19);
        
        // This assigns random values to the crystals.
        var crystalA = Math.floor(Math.random() * 13 + 1);
        var crystalA2 = Math.floor(Math.random() * 13 + 1);
        var crystalL = Math.floor(Math.random() * 13 + 1);
        var crystalR = Math.floor(Math.random() * 13 + 1);

        // Function that keeps track of your current score.
        $("#score").text(score);
        console.log(score);
        
        // Function that determines wins.
         function wins() {
            wins++;
            $("#wins").text(wins);
            console.log(wins);
        };
        
        // Funciton that determines losses.
        function losses() {
            losses++;
            $("#losses").text(losses);
            console.log(losses);
        };
        
        // Onclick function for the crystals. Each crystal needs it's own function that grabs from 
        // the crystals variable, which is set to grab a random number between 1 and 12.
        $("#amethyst").on("click", function() {
            counter = crystalA + counter;
            $("#score").text(counter);
            // If statement that determines win or loss.
            if (counter == score) {
                wins();
            }
            else if (counter > score) {
                losses();
            }
        });

        $("#lapis").on("click", function() {
            counter = crystalL + counter;
            $("#score").text(counter);
            // If statement that determines win or loss.
            if (counter == score) {
                wins();
            }
            else if (counter > score) {
                losses();
            }
        });

        $("#aquamarine").on("click", function() {
            counter = crystalA2 + counter;
            $("#score").text(counter);
            // If statement that determines win or loss.
            if (counter == score) {
                wins();
            }
            else if (counter > score) {
                losses();
            }
        });

        $("#rosequartz").on("click", function() {
            counter = crystalR + counter;
            $("#score").text(counter);
            // If statement that determines win or loss.
            if (counter == score) {
                wins();
            }
            else if (counter > score) {
                losses();
            }
        });
        