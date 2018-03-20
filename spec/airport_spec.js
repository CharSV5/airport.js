describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane
  });

  describe('when a plane lands', function() {
    it('confirms it has landed', function() {
      expect(airport.land(plane)).toEqual('The plane has landed');
    });
  })

    describe('when checking the hangar after landing,', function() {
    it('the hangar length grows by one', function() {
      var length = airport._hangar.length
      airport.land(plane)
      expect(airport._hangar.length).toEqual(length + 1);
    });
  });

  describe('when a plane takes off', function() {
    it('confirms the plane has taken off', function() {
      expect(airport.takeOff()).toEqual('The Plane has taken off');
    });
  });

  describe('when checking the hangar after take off,', function(){
    it('the hangar length decreases by one', function() {
      airport.land(plane)
      var length = airport._hangar.length
      airport.takeOff()
      expect(airport._hangar.length).toEqual(length - 1);
    });
  });
});
