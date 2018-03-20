function Airport() {
  this._hangar = []
};

function Plane() {

};

Airport.prototype.land = function(plane) {
  this._hangar.push(plane);
  return "The plane has landed";
};

// Airport.prototype.checkHangar = function() {
//   return this._hangar;
// };

Airport.prototype.takeOff = function() {
  this._hangar.splice(0,1)
  return "The Plane has taken off";
}
