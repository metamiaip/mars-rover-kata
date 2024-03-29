rover.js
- mainly provide functionality for a single rover to move/turn based on given command
- check collision with other rovers on each move by passing the array with all rovers current position
  

roverControl.js
- mainly control multiple rovers to move
- manage the array with all rovers current position (used by single rover to prevent collision)

Sequence of the design:
1. build a single rover
2. add functionality for a single rover (e.g. turn/move)
3. test bit by bit using jest
4. Once the single rover seems worked, build a rover control module to control multiple rovers
5. Firstly, I just think about to check the last position of each rovers after all moves completed.  However, I find that this logic cannot prevent rovers to collide with other.
6. Then I tried to keep track the latest position of each rovers and pass to each rover when sending command to it.
7. With this change, each rover now can check with this array with latest position of each rovers on each move to prevent collision. (i.e. collide function is added at last to implement this, and I found out that the array.indexOf return value should include >= 0 rather than > 0 because when only one rover position is in the array of latest position of each rovers, the collide function fail to prevent collision)

Assumptions:
1. if initial position of rover is not provided, default position is [0,0]
2. if rover direction is not provided, default is N
3. if rover command is not provided, default to empty string

Validation:
1. check initial rover position is within a plateau
2. check if command is blank
3. check after each move, the new position is within a plateau
4. compare each rovers latest position with the new position of the rover moving currently, if match then return error (collision will happen if a rover is on the moving path of another rover)
5. check if any command not in L, R or M
   
Future thoughts:
1. Now all rovers move in sequence (one by one), and when one of the rovers with invalid command, all rovers movement are rejected to prevent any collision.  Another approach should be to allow the rovers to move before the collision and report back to NASA which rover with non-executed command.
2. In real world, if Mars plateau is 5x5, when the rover reach [5,5] position and face E, it should be able to keep moving and its position can go back to [0,5] (like moving around on the sphere).
3. Error message management can use a seperate module to handle by passing the message key and return the error. Any idea on how javascript module handle error message.  e.g. when calling A function from B function in different modules, if A return error message and B rely on this error to do something.  How can both module share this error message to do something?
4. try to use mjs but fail to use jest (see rover.mjs and rover.test.mjs).  Is it possible to use "import {...}  from './rover.mjs' " in jest?  Any reference link that I can read and see how to do it?
5. If roverControl.js only call rover function in rover.js, that mean I don't need to do "module.exports" for other function to prevent it from calling outside this module.  Is this correct?  Currently I exports every functions for other module to call.
6. To import function from mjs, we can do it like:
- import {x,y,z} from './xxx.mjs';
    But in xxx.mjs module, I need to add "export" keywords in every single function.
    Is there any other ways to do it?



