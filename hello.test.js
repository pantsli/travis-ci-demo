'use strict';

var expect = require('chai').expect;
var hello = require('./hello');
var world = require('./world');

describe('run hello.js', function() {
  it('should return "Hello World"', function() {
    expect(hello()).to.equal('Hello World');
  });
});

describe('run world.js', function() {
  it('should return "World"', function() {
    expect(world()).to.equal('World');
  });
});
