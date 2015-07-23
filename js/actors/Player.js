/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */

define(function(require) {
    var Vector = require('../areaAction/Vector');
    var playerXSpeed = 7;
    var gravity = 30;
    var jumpSpeed = 17;

    function Player(pos) {
        if (!(pos instanceof Vector))
            throw new Error('Argument is not object of Vector');
        this.pos = pos.plus(new Vector(0, -0.5));
        this.size = new Vector(0.8, 1.5);
        this.speed = new Vector(0, 0);
    }

    Player.prototype.type = "player";

    Player.prototype.moveX = function (step, level, keys) {
        if (
            typeof(step) !== 'number' ||
            level.constructor.name !== 'Level' ||
            Object.prototype.toString.call(keys).toUpperCase() !== '[OBJECT OBJECT]'
        )
            throw 'Error of type arguments in Player.moveX';
        this.speed.x = 0;
        if (keys.left) this.speed.x -= playerXSpeed;
        if (keys.right) this.speed.x += playerXSpeed;

        var motion = new Vector(this.speed.x * step, 0);
        var newPos = this.pos.plus(motion);
        var obstacle = level.obstacleAt(newPos, this.size);
        if (obstacle)
            level.playerTouched(obstacle);
        else
            this.pos = newPos;
    };

    Player.prototype.moveY = function (step, level, keys) {
        if (
            typeof(step) !== 'number' ||
            level.constructor.name !== 'Level' ||
            Object.prototype.toString.call(keys).toUpperCase() !== '[OBJECT OBJECT]'
        )
            throw 'Error of type arguments in Player.moveX';
        this.speed.y += step * gravity;
        var motion = new Vector(0, this.speed.y * step);
        var newPos = this.pos.plus(motion);
        var obstacle = level.obstacleAt(newPos, this.size);
        if (obstacle) {
            level.playerTouched(obstacle);
            if (keys.up && this.speed.y > 0)
                this.speed.y = -jumpSpeed;
            else
                this.speed.y = 0;
        } else {
            this.pos = newPos;
        }
    };

    Player.prototype.act = function (step, level, keys) {
        if (
            typeof(step) !== 'number' ||
            level.constructor.name !== 'Level' ||
            Object.prototype.toString.call(keys).toUpperCase() !== '[OBJECT OBJECT]'
        )
            throw 'Error of type arguments in Player.moveX';
        this.moveX(step, level, keys);
        this.moveY(step, level, keys);

        var otherActor = level.actorAt(this);
        if (otherActor)
            level.playerTouched(otherActor.type, otherActor);

        // Losing animation
        if (level.status == "lost") {
            this.pos.y += step;
            this.size.y -= step;
        }
    };

    return Player;
});