/**
 * Created by v.bogoroditskiy on 7/20/2015.
 */

define(function(){

    function element(name, className) {
        var elt = document.createElement(name);
        if (className) elt.className = className;

        return elt;
    }

    return element;
});