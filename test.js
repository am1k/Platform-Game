/**
 * Created by v.bogoroditskiy on 7/21/2015.
 */
require("amd-loader");

var GAME_LEVELS = require('./js/lib/game_levels'),
    expect =  require('expect.js');

describe('Tests', function() {

    describe('#GAME_LEVELS()', function() {
        it('should be array', function() {
            expect(Object.prototype.toString.call(GAME_LEVELS).toUpperCase()).to.eql("[OBJECT ARRAY]");
        });
        it('not a object', function() {
            expect(Object.prototype.toString.call(GAME_LEVELS).toUpperCase() === '[OBJECT OBJECT]').to.be.false;
        });
        it('not a string', function() {
            expect(Object.prototype.toString.call(GAME_LEVELS).toUpperCase() === '[OBJECT STRING]').to.be.false;
        });
        it('should be null', function() {
            expect(Object.prototype.toString.call(GAME_LEVELS).toUpperCase() === null).to.be.true;
        });
        it('should be undefined', function() {
            expect(Object.prototype.toString.call(GAME_LEVELS).toUpperCase() === undefined).to.be.true;
        });
    });

});