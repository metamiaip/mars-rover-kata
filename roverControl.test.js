const {
    roverControl,
    roverMoveSimulation
} = require('./roverControl');    

describe("Send command to two rovers", () => {
    test("return the final position of two rovers", () => {
        const rovers = [
            {id:1, size:[5,5], pos:[0,0], face:"N", cmd:"LRMM"},
            {id:2, size:[5,5], pos:[1,1], face:"E", cmd:"MM"},
            {id:3, size:[5,5], pos:[4,1], face:"E", cmd:"LRM"}
          ];
      expect(roverControl(rovers)).toStrictEqual(["0 2 N", "3 1 E", "5 1 E"]);
    });
  
    test("return error - rover collide with other rover not yet moved", () => {
        const rovers3 = [
            {id:1, size:[5,5], pos:[0,0], face:"N", cmd:"LR"},
            {id:2, size:[5,5], pos:[0,2], face:"E", cmd:"MM"},
            {id:3, size:[5,5], pos:[2,2], face:"S", cmd:"MM"}
          ];
          
          expect(roverControl(rovers3)).toBe("Invalid rovers command set (id: 1), please resend!");
    }); 

    test("return error, rover is collided with other rover while moving", () => {
        const rovers4 = [
            {id:1, size:[5,5], pos:[0,0], face:"N", cmd:"LRMM"},
            {id:2, size:[5,5], pos:[0,1], face:"E", cmd:"MM"}
            ];
        expect(roverControl(rovers4)).toBe("Invalid rovers command set (id: 1), please resend!");
    });
});
