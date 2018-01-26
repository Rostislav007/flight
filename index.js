var Flight = function () {

var number, origin, destination;

this.setNumber = function(num) {
  number = num;

};

this.setOrigin = function(o) {
  origin = o;
};

this.setDestination = function(d) {
  destination = d;
};

this.getinfo = function() {
  return {
    number: number,
    origin: origin,
    destination: destination
  };
};
};
module.exports = () => new Flight();﻿



	
