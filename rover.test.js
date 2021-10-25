const {
    rover,
    move,
    turn,
    showRoverLocation
} = require('./rover');    
  
describe("Rover test", () => {
    test("return the pass-in mars plateau size", () => {
      expect(rover([5,5])).toBe("Mars Plateau Size is [5,5].\nRover initial position is [0,0].\nRover face to N.");
    });
  
    test("return the pass-in mars plateau size, and initial position", () => {
        expect(rover([5,5],[0,1],"E","LRMMM")).toBe("Mars Plateau Size is [5,5].\nRover initial position is [0,1].\nRover face to E.Command sent: L,R,M,M,M.");
      });
});