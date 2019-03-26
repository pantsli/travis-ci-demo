(function() {
    'use strict';
    function myworld (){
        console.log('my name is world.');
    }
    myworld()
})();

var world = function (){
    return 'World';
};

module.exports = world;