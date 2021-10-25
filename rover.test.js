const {
    rover,
    move,
    turn,
    showRoverLocation
} = require('./rover');    
  
describe("Rover test 01- return received pass in parameter", () => {
    test("return the pass-in mars plateau size", () => {
      expect(rover([5,5])).toBe("Mars Plateau Size is [5,5].\nRover initial position is [0,0].\nRover face to N.\nCommand sent: .\nFinal rover position:0 0 N.");
    });
  
    test("return the pass-in mars plateau size, and initial position", () => {
        expect(rover([5,5],[0,1],"E","LMMM")).toBe("Mars Plateau Size is [5,5].\nRover initial position is [0,1].\nRover face to E.\nCommand sent: L,M,M,M.\nFinal rover position:0 1 N.");
      });     
});

describe("Rover test 02 - check turn function received correct command", () => {
  test("check turn left (L)", () => {
    expect(rover([5,5],[0,1],"E","L")).toBe("Mars Plateau Size is [5,5].\nRover initial position is [0,1].\nRover face to E.\nCommand sent: L.\nFinal rover position:0 1 N.");
  });

  test("check turn right (R)", () => {
      expect(rover([5,5],[0,1],"E","R")).toBe("Mars Plateau Size is [5,5].\nRover initial position is [0,1].\nRover face to E.\nCommand sent: R.\nFinal rover position:0 1 S.");
    });     
});
