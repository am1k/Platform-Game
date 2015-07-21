/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */

define(function(require) {
    var Player = require('./Player'),
        Coin = require('./Coin'),
        Lava = require('./Lava');

    var actorChars = {
        "@": Player,
        "o": Coin,
        "=": Lava, "|": Lava, "v": Lava
    };

    return actorChars;
});