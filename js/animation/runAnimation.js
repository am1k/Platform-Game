/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */

define(function(require) {

    function runAnimation(frameFunc) {
        var lastTime = null;

        function frame(time) {
            var stop = false;
            if (lastTime != null) {
                var timeStep = Math.min(time - lastTime, 100) / 1000;
                stop = frameFunc(timeStep) === false;
            }
            lastTime = time;
            if (!stop)
                requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    }

    return runAnimation;

});