/**
 * Created by v.bogoroditskiy on 7/21/2015.
 */

define(function(require){
    var runGame = require('./runGame'),
        GAME_LEVELS = require('../lib/game_levels'),
        DOMDisplay = require('../display/DOMDisplay');

    return runGame(GAME_LEVELS, DOMDisplay);

});