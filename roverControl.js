/*
a controller to call multiple mars rover
functionality:
1.receive multiple set of command for multiple rover
2.simulate each rover move and record its simulated final position
3.if any of the rover simulated final position is the same, reject the whole set of command
*/

const {
    rover,
    move,
    turn
} = require('./rover');    

function roverControl(roverSet) {
    const roverLocation = [...roverSet]; 
    let curRoverMoveTo = "";
    let roversCoordArr = [];    //keep unique rover position
    for (let i=0; i<roverLocation.length; i++) {
        /*
        console.log(roverLocation[i].id);
        console.log(roverLocation[i].size);
        console.log(roverLocation[i].pos);
        console.log(roverLocation[i].face);
        console.log(roverLocation[i].cmd); 
        */
        curRoverMoveTo = roverMoveSimulation(roverLocation[i].size,roverLocation[i].pos,roverLocation[i].face,roverLocation[i].cmd);
        //console.log(`id: ${roverLocation[i].id}, move to: ${curRoverMoveTo.substring(0,3)}`);
        
        if (roversCoordArr.indexOf(curRoverMoveTo.substring(0,3))>0 || 
            curRoverMoveTo == "Rover initial position is out of the plateau." ||
            curRoverMoveTo == "Invalid command, rover stopped!") {
          return "Invalid rovers command set, please resend!";
        } 
        roversCoordArr.push(curRoverMoveTo.substring(0,3));
        //console.log(roversCoordArr.indexOf(curRoverMoveTo.substring(0,3)));
        //console.log(roversCoordArr);
    }
    return true;
}

function roverMoveSimulation(size, position, faceTo, cmd) {
    return rover(size, position, faceTo, cmd);
}

//test command: node roverControl.js
/*
const rovers = [
    {id:1, size:[5,5], pos:[0,0], face:"N", cmd:"LRMM"},
    {id:2, size:[5,5], pos:[0,1], face:"E", cmd:"MM"},
    {id:3, size:[5,5], pos:[0,1], face:"E", cmd:"MM"}
  ];

roverControl(rovers);
*/
