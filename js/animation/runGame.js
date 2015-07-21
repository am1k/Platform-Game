/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */


define(function(require) {
    var Level = require('../areaAction/Level'),
        runLevel = require('./runLevel');

    function runGame(plans, Display) {
        function startLevel(n, lives) {
            runLevel(new Level(plans[n]), Display, function (status) {
                if (status == "lost") {
                    if (lives > 0) {
                        startLevel(n, lives - 1);
                    } else {
                        alert("Game over");
                        startLevel(0, 3);
                    }
                }
                else if (n < plans.length - 1)
                    startLevel(n + 1, lives);
                else
                    console.log("You win!");
            });
        }

        startLevel(0, 3);
    }

    return runGame;
});