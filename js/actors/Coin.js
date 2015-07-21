/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */

define(function(require) {
    var Vector = require('../areaAction/Vector');

    function Coin(pos) {
        this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
        this.size = new Vector(0.6, 0.6);
        this.wobble = Math.random() * Math.PI * 2;
    }

    Coin.prototype.type = "coin";

    var wobbleSpeed = 8, wobbleDist = 0.07;

    Coin.prototype.act = function (step) {
        this.wobble += step * wobbleSpeed;
        var wobblePos = Math.sin(this.wobble) * wobbleDist;
        this.pos = this.basePos.plus(new Vector(0, wobblePos));
    };

    return Coin;
});