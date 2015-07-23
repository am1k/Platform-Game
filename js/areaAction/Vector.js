/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */

define(function () {

        function Vector(x, y) {
            if (x != null || y != null || x != undefined || y != undefined) {
                this.x = x;
                this.y = y;
            } else {
                throw new Error('');
            }
        }

        Vector.prototype.plus = function(other) {
            return new Vector(this.x + other.x, this.y + other.y);
        };

        Vector.prototype.times = function(factor) {
            return new Vector(this.x * factor, this.y * factor);
        };

        return Vector;

});