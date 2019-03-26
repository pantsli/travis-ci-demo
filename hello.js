'use strict';

function hello(){
  return 'Hello World';
}

module.exports = hello;

(function() {
  console.log('I come from hello.js');
})();