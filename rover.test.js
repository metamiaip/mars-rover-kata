const {
    rover,
    move,
    turn,
    showRoverLocation
} = require('./rover');    
  
describe("Rover test", () => {
    test("return the pass-in mars plateau size", () => {
      expect(rover([5,5])).toBe("Mars Plateau Size is [5,5]. Rover initial position is [0,0]");
    });
  
    test("return the pass-in mars plateau size, and initial position", () => {
        expect(rover([5,5],[0,1])).toBe("Mars Plateau Size is [5,5]. Rover initial position is [0,1]");
      });
});