/**
 * Created by v.bogoroditskiy on 7/21/2015.
 */

define(function(require){
    var runGame = require('./runGame'),
        GAME_LEVELS = require('../lib/game_levels'),
        CanvasDisplay = require('../display/CanvasDisplay');

    runGame(GAME_LEVELS, CanvasDisplay);

});