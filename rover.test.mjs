import {jest} from '@jest/globals';
import {rover,move,turn,showRoverLocation} from './rover.mjs';

describe("Rover test", () => {
    test("return the pass-in mars plateau size", () => {
      expect(rover([5,5])).toBe("Mars Plateau Size is [5,5]");
    });
  
    
});
/*
console.log(rover([5,5]));
console.log(move());
console.log(turn());
console.log(showRoverLocation());
*/

