const {
    rover,
    move,
    turn,
    collide
} = require('./rover');    

//modify all toBe part to return expected output X Y N
describe("missing parameters", () => {
    test("return error when parameter is missing, e.g. no command", () => {
      expect(rover([5,5])).toBe("Invalid command, rover stopped!");
    });   
});

describe("provide parameters", () => {
  test("provide all parameters", () => {
      expect(rover([5,5],[0,1],"E","L")).toBe("0 1 N");
    });     
});

describe("check turn function", () => {
  test("check turn left (L)", () => {
    expect(rover([5,5],[0,1],"E","L")).toBe("0 1 N");
  });

  test("check turn right (R)", () => {
      expect(rover([5,5],[0,1],"E","R")).toBe("0 1 S");
    });     
});

describe("check move function", () => {
  test("[0,0], face N, M M M", () => {
    expect(rover([5,5],[0,0],"N","MMM")).toBe("0 3 N");
  });
  
  //out of boundary
  test("[0,0], face N, L M", () => {
    expect(rover([5,5],[0,0],"N","LM")).toBe("Invalid command, rover stopped!");
  });
});

describe("combined command with L,R,M", () => {
  test("[1,2], face:N, command:LMLMLMLMM", () => {
    expect(rover([5,5],[1,2],"N","LMLMLMLMM")).toBe("1 3 N");
  });
  
  test("[3,3], face:E, command:MMRMMRMRRM", () => {
    expect(rover([5,5],[3,3],"E","MMRMMRMRRM")).toBe("5 1 E");
  });
});

describe("combined command with L,R,M and invalid command", () => {
  test("[1,2], face:N, command:LMX", () => {
    expect(rover([5,5],[1,2],"N","LMX")).toBe("Invalid command, rover stopped!");
  });
  
  test("[3,3], face:E, command:MM1", () => {
    expect(rover([5,5],[3,3],"E","MM1")).toBe("Invalid command, rover stopped!");
  });
});

describe("alert if rover initial position is out of the plateau", () => {
  test("[6,6], face:N, command:LM", () => {
    expect(rover([5,5],[6,6],"N","LM")).toBe("Rover initial position is out of the plateau.");
  });
  
  test("[-1,-2], face:E, command:MM", () => {
    expect(rover([5,5],[-1,-2],"E","MM")).toBe("Rover initial position is out of the plateau.");
  });
});

describe("collision checking", () => {
  const rovers = ["0 1"];

  test("collide with other rovers", () => {
    expect(rover([5,5],[0,0],"N","LRMM",rovers)).toBe("Collision with other rover");
  });
  
  const rovers1 = ["0 1","0 2"];

  test("collide with other rovers", () => {
    expect(rover([5,5],[0,0],"N","LRMM",rovers1)).toBe("Collision with other rover");
  });
});
