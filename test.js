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
    Player = require('./js/actors/Player'),
    Level = require('./js/areaAction/Level');

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
        it('Check to create new object "Coin"', function(){
            expect(new Coin(new Vector(3, 4))).to.be.ok;
        });

        it('Argument constructor "Coin" null', function() {
            expect(function () {
                new Coin(null);
            }).to.be.throwError();
        });
        it('Argument constructor "Coin" undefined', function() {
            expect(function () {
                new Coin(undefined);
            }).to.be.throwError();
        });
        it('Argument constructor  array', function() {
            expect(function () {
                new Coin([]);
            }).to.be.throwError();
        });
        it('Argument constructor  object', function() {
            expect(function () {
                new Coin({});
            }).to.be.throwError();
        });
        it('Argument constructor sting value', function() {
            expect(function () {
                new Coin(1);
            }).to.be.throwError();
        });

        var testCoin = new Coin(new Vector(3, 4));
        it('Check method "type" in object "Coin"', function(){
            expect(testCoin).to.have.property('type');
        });
        it('Check method "act" in object "Coin"', function(){
            expect(testCoin).to.have.property('act');
        });
        it('Argument in method "act" null"', function() {
            expect(testCoin.act).withArgs(null).to.throwException();
        });
        it('Argument in method "act" undefined', function() {
            expect(testCoin.act).withArgs(undefined).to.throwException();
        });
        it('Argument in method "act" array', function() {
            expect(testCoin.act).withArgs([]).to.throwException();
        });
        it('Argument in method "act" object', function() {
            expect(testCoin.act).withArgs({}).to.throwException();
        });
        it('Argument in method "act" string', function() {
            expect(testCoin.act).withArgs('string').to.throwException();
        });
    });

    describe('#Lava()', function() {
        var testVector = new Vector(1, 2);
        var testLava = new Lava(testVector, "v");
        var testLevel = new Level(['']);

        it('Check to create new object "Lava"', function () {
            expect(new Lava(testVector, "v")).to.be.ok;
        });
        it('Check to create new object "Lava"', function () {
            expect(new Lava(testVector, "|")).to.be.ok;
        });
        it('Check to create new object "Lava"', function () {
            expect(new Lava(testVector, "=")).to.be.ok;
        });
        it('Check method "act" in object "Lava"', function(){
            expect(testLava).to.have.property('act');
        });
        it('Check method "type" in object "Lava"', function(){
            expect(testLava).to.have.property('type');
        });
        it('Argument in method "act" of "Lava" object must be "number"', function() {
            expect(function () {
                testLava.act(0.01, testLevel);
            }).to.not.throwException();
        });
        it('Argument in method "act" of "Lava" null"', function() {
            expect(function(){
                testLava.act(null, testLevel);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava" undefined', function() {
            expect(function(){
                testLava.act(undefined, testLevel);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava"  array', function() {
            expect(function(){
                testLava.act([], testLevel);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava"  object', function() {
            expect(function(){
                testLava.act({}, testLevel);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava" undefined', function() {
            expect(function(){
                testLava.act(0.01, undefined);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava" null', function() {
            expect(function(){
                testLava.act(0.01, null);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava"  array', function() {
            expect(function(){
                testLava.act(0.01, []);
            }).to.throwException();
        });
        it('Argument in method "act" of "Lava"  object', function() {
            expect(function(){
                testLava.act(0.01, {});
            }).to.throwException();
        });
    });

    describe('#Player()', function() {
        var testVector = new Vector(1, 2),
            testPlayer = new Player(testVector),
            testLevel = new Level(['']);

        it('Check to create new object "Player"', function(){
            expect(testPlayer).to.be.ok;
        });
        it('Argument in constructor "Player" null', function() {
            expect(function () {
                new Player(null);
            }).to.throwException();
        });
        it('Argument in constructor "Player" undefined', function() {
            expect(function () {
                new Player(undefined);
            }).to.throwException();
        });
        it('Argument in constructor "Player" array', function() {
            expect(function () {
                new Player([]);
            }).to.throwException();
        });
        it('Argument in constructor "Player" object', function() {
            expect(function () {
                new Player({});
            }).to.throwException();
        });
        it('Check method "act" in object "Player"', function(){
            expect(testPlayer).to.have.property('act');
        });
        it('Check method "moveX" in object "Player"', function(){
            expect(testPlayer).to.have.property('moveX');
        });
        it('Check method "moveY" in object "Player"', function(){
            expect(testPlayer).to.have.property('moveY');
        });
        it('Arguments "number", "Level", "Object"', function() {
            expect(function () {
                testPlayer.act(0.01, testLevel, {});
            }).to.not.throwException();
        });
        it('Arguments  "null", "Level", "Object"', function() {
            expect(function () {
                testPlayer.act(null, testLevel, {});
            }).to.throwException();
        });
        it('Arguments  "undefined", "Level", "Object"', function() {
            expect(function () {
                testPlayer.act(undefined, testLevel, {});
            }).to.throwException();
        });
        it('Arguments  "array", "Level", "Object"', function() {
            expect(function () {
                testPlayer.act([], testLevel, {});
            }).to.throwException();
        });
        it('Arguments  "object", "Level", "Object"', function() {
            expect(function () {
                testPlayer.act({}, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "number", "null", "Object"', function() {
            expect(function () {
                testPlayer.act(0.01, null, {});
            }).to.throwException();
        });
        it('Arguments  "number", "undefined", "Object"', function() {
            expect(function () {
                testPlayer.act(0.01, undefined, {});
            }).to.throwException();
        });
        it('Arguments "number", "array", "Object"', function() {
            expect(function () {
                testPlayer.act(0.01, [], {});
            }).to.throwException();
        });
        it('Arguments "number", "object", "Object"', function() {
            expect(function () {
                testPlayer.act(0.01, {}, {});
            }).to.throwException();
        });
        it('Arguments "number", "Level", "null"', function() {
            expect(function () {
                testPlayer.act([], testLevel, null);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "undefined"', function() {
            expect(function () {
                testPlayer.act([], testLevel, undefined);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "array"', function() {
            expect(function () {
                testPlayer.act([], testLevel, []);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "number"', function() {
            expect(function () {
                testPlayer.act([], testLevel, 0.01);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveX(0.01, testLevel, {});
            }).to.not.throwException();
        });
        it('Arguments "null", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveX(null, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "undefined", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveX(undefined, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "array", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveX([], testLevel, {});
            }).to.throwException();
        });
        it('Arguments "object", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveX({}, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "number", "null", "Object"', function() {
            expect(function () {
                testPlayer.moveX(0.01, null, {});
            }).to.throwException();
        });
        it('Arguments "number", "undefined", "Object"', function() {
            expect(function () {
                testPlayer.moveX(0.01, undefined, {});
            }).to.throwException();
        });
        it('Arguments "number", "object", "Object"', function() {
            expect(function () {
                testPlayer.moveX(0.01, {}, {});
            }).to.throwException();
        });
        it('Arguments "number", "array", "Object"', function() {
            expect(function () {
                testPlayer.moveX(0.01, [], {});
            }).to.throwException();
        });
        it('Arguments "number", "Level", "null"', function() {
            expect(function () {
                testPlayer.moveX(0.01, testLevel, null);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "undefined"', function() {
            expect(function () {
                testPlayer.moveX(0.01, testLevel, undefined);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "array"', function() {
            expect(function () {
                testPlayer.moveX(0.01, testLevel, []);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "number"', function() {
            expect(function () {
                testPlayer.moveX(0.01, testLevel, 0.01);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveY(0.01, testLevel, {});
            }).to.not.throwException();
        });

        it('Arguments "null", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveY(null, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "undefined", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveY(undefined, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "array", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveY([], testLevel, {});
            }).to.throwException();
        });
        it('Arguments "object", "Level", "Object"', function() {
            expect(function () {
                testPlayer.moveY({}, testLevel, {});
            }).to.throwException();
        });
        it('Arguments "number", "null", "Object"', function() {
            expect(function () {
                testPlayer.moveY(0.01, null, {});
            }).to.throwException();
        });
        it('Arguments "number", "undefined", "Object"', function() {
            expect(function () {
                testPlayer.moveY(0.01, undefined, {});
            }).to.throwException();
        });
        it('Arguments "number", "object", "Object"', function() {
            expect(function () {
                testPlayer.moveY(0.01, {}, {});
            }).to.throwException();
        });
        it('Arguments "number", "array", "Object"', function() {
            expect(function () {
                testPlayer.moveY(0.01, [], {});
            }).to.throwException();
        });
        it('Arguments "number", "Level", "null"', function() {
            expect(function () {
                testPlayer.moveY(0.01, testLevel, null);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "undefined"', function() {
            expect(function () {
                testPlayer.moveY(0.01, testLevel, undefined);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "array"', function() {
            expect(function () {
                testPlayer.moveY(0.01, testLevel, []);
            }).to.throwException();
        });
        it('Arguments "number", "Level", "number"', function() {
            expect(function () {
                testPlayer.moveY(0.01, testLevel, 0.01);
            }).to.throwException();
        });
    });
    describe('#Level', function() {
        var testLevel = new Level(['']);

        it('Check create new object "Level"', function () {
            expect(new Level([''])).to.be.ok;
        });
        it('Argument in "Level" object must be only "array"', function () {
            expect(function () {
                new Level(null);
            }).to.throwException();
        });
        it('Argument in "Level" object must be only "array"', function () {
            expect(function () {
                new Level(undefined);
            }).to.throwException();
        });
        it('Argument in "Level" object must be only "array"', function () {
            expect(function () {
                new Level({});
            }).to.throwException();
        });
        it('Arguments in method "obstacleAt" of Level object, must be only "Vector"', function() {
            expect(testLevel.obstacleAt(new Vector(1, 2), new Vector(1, 2))).to.be.ok;
        });
        it('Arguments "Vector", "null', function() {
            expect(function() {
                testLevel.obstacleAt(new Vector(1, 2), null)
            }).to.throwException();
        });
        it('Arguments "Vector", "undefined"', function() {
            expect(function() {
                testLevel.obstacleAt(new Vector(1, 2), undefined)
            }).to.throwException();
        });
        it('Arguments "Vector", "array"', function() {
            expect(function() {
                testLevel.obstacleAt(new Vector(1, 2), [])
            }).to.throwException();
        });
        it('Arguments "Vector", "object"', function() {
            expect(function() {
                testLevel.obstacleAt(new Vector(1, 2), {})
            }).to.throwException();
        });
        it('Arguments "Vector", "number"', function() {
            expect(function() {
                testLevel.obstacleAt(new Vector(1, 2), 1)
            }).to.throwException();
        });


    });

});