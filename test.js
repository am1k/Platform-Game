/**
 * Created by v.bogoroditskiy on 7/21/2015.
 */
require("amd-loader");

var GAME_LEVELS = require('./js/lib/game_levels'),
    expect =  require('expect.js'),
    Coin = require('./js/actors/Coin'),
    Lava = require('./js/actors/Lava'),
    arrowCodes = require('./js/animation/arrowCodes'),
    Vector = require('./js/areaAction/Vector'),
    actorChars = require('./js/actors/actorChars'),
    Player = require('./js/actors/Player');

describe('Tests', function() {

    describe('#GAME_LEVELS()', function() {
        it('should be array', function() {
            expect(Object.prototype.toString.call(GAME_LEVELS).toUpperCase()).to.eql("[OBJECT ARRAY]");
        });
        it('show elements coin', function() {
            var hasActor = false;
            for (var property in actorChars) {
                if(actorChars.hasOwnProperty(property) && property == "o") {
                    hasActor = true;
                }
            }
            expect(hasActor).to.be(true);
         });
        it('show elements player', function() {
            var hasActor = false;
            for (var property in actorChars) {
                if(actorChars.hasOwnProperty(property) && property == "@") {
                    hasActor = true;
                }
            }
            expect(hasActor).to.be(true);
        });
        it('show elements lava', function() {
            var hasActor = false;
            for (var property in actorChars) {
                var condition = property == '=' || property == '|' || property == 'v';
                if(actorChars.hasOwnProperty(property) && condition) {
                    hasActor = true;
                }
            }
            expect(hasActor).to.be(true);
        });
    });

    describe('#Vector()', function() {
        it('should be null', function() {
            expect(function () {
                var test = new Vector(null);
            }).to.throwError();
        });
        it('should be undefined', function() {
            expect(function () {
                var test = new Vector(undefined);
            }).to.throwError();
        });
        it('should be object', function() {
            var test = new Vector(1,2);
            expect(test).to.be.a('object');
        });
        it('should be new object with new result plus', function() {
            var test1 = new Vector(2,2);
            var test2 = new Vector(3,3);

            var sumVector = test1.plus(test2);

            expect(sumVector).to.eql({x:5,y:5});
        });
    });

    describe('#arrowCodes()', function () {
        it('should be object', function() {
            expect(arrowCodes).to.be.a('object');
        });
        it('should be equivalent left', function() {
            expect(arrowCodes[37]).to.eql('left');
        });
        it('should be equivalent up', function() {
            expect(arrowCodes[38]).to.eql('up');
        });
        it('should be equivalent right', function() {
            expect(arrowCodes[39]).to.eql('right');
        });
    });

    describe('#Coin()', function() {

    });








});