const {
    rover,
    move,
    turn
} = require('./rover');    

//modify all toBe part to return expected output X Y N
describe("Rover test 01- return received pass in parameter", () => {
    test("return the pass-in mars plateau size", () => {
      expect(rover([5,5])).toBe("0 0 N.");
    });
  
    test("return the pass-in mars plateau size, and initial position", () => {
        expect(rover([5,5],[0,1],"E","L")).toBe("0 1 N.");
      });     
});

describe("Rover test 02 - check turn function", () => {
  test("check turn left (L)", () => {
    expect(rover([5,5],[0,1],"E","L")).toBe("0 1 N.");
  });

  test("check turn right (R)", () => {
      expect(rover([5,5],[0,1],"E","R")).toBe("0 1 S.");
    });     
});

describe("Rover test 03 - check move function", () => {
  test("[0,0], face N, M M M", () => {
    expect(rover([5,5],[0,0],"N","MMM")).toBe("0 3 N.");
  });
  
  test("[0,0], face N, L M", () => {
    expect(rover([5,5],[0,0],"N","LM")).toBe("Invalid command, rover stopped!");
  });
});

describe("Rover test 04 - test combined command with L,R,M", () => {
  test("[1,2], face:N, command:LMLMLMLMM", () => {
    expect(rover([5,5],[1,2],"N","LMLMLMLMM")).toBe("1 3 N.");
  });
  
  test("[3,3], face:E, command:MMRMMRMRRM", () => {
    expect(rover([5,5],[3,3],"E","MMRMMRMRRM")).toBe("5 1 E.");
  });
});

describe("Rover test 05 - test combined command with L,R,M and invalid command", () => {
  test("[1,2], face:N, command:LMX", () => {
    expect(rover([5,5],[1,2],"N","LMX")).toBe("Invalid command, rover stopped!");
  });
  
  test("[3,3], face:E, command:MM1", () => {
    expect(rover([5,5],[3,3],"E","MM1")).toBe("Invalid command, rover stopped!");
  });
});

describe("Rover test 06 - alert if rover initial position is out of the plateau", () => {
  test("[6,6], face:N, command:LM", () => {
    expect(rover([5,5],[6,6],"N","LM")).toBe("Rover initial position is out of the plateau.");
  });
  
  test("[-1,-2], face:E, command:MM", () => {
    expect(rover([5,5],[-1,-2],"E","MM")).toBe("Rover initial position is out of the plateau.");
  });
});
