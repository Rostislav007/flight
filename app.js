var  FlightModule  = require  ("./flight");

var flight = new flightModule ();

flight.setOrigin("Dnepr");
flight.setDestination("Amsterdam");
flight.setNumber(700);

var flight2 = new flightModule ();

flight.setOrigin("Kiev");
flight.setDestination("London");
flight.setNumber(007);

console.log(flight.getInfo());
console.log(flight2.getInfo());