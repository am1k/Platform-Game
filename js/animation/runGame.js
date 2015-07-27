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
                        var canvas = document.createElement("canvas");
                        canvas.width = 600;
                        canvas.height = 450;
                        document.body.appendChild(canvas);
                        var cx = canvas.getContext("2d");
                        var img = document.createElement("img");
                        img.src = "http://www.wallpaperbeautiful.com/thumbnails/detail/20130426/video%20games%20quotes%20game%20over%20dndesign_wallpaperbeautiful_78.jpg";
                        img.addEventListener("load", function() {
                            cx.drawImage(img, 0, 0);
                        });
                        canvas.addEventListener('click', restart);
                        document.addEventListener('keydown', restart);
                    }
                }
                else if (n < plans.length - 1)
                    startLevel(n + 1, lives);
                else
                    console.log("You win!");
            });
        }
        function restart(){
            startLevel(0,1);
        }
        startLevel(0, 1);
    }

    return runGame;
});