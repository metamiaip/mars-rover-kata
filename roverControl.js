/*
a controller to call multiple mars rover
functionality:
1.receive multiple set of command for multiple rover
2.move each rover and record its final position
3.if received any error during any move of the rovers, reject the whole set of command
*/

const {
    rover,
    move,
    turn
} = require('./rover');    

function roverControl(roverSet) {
    const roverLocation = [...roverSet]; 
    let curRoverMoveTo = "";
    let roversInitPosArr = [];
    let roversCoordArr = [];    //keep unique rover position after move
    let roversOutput = [];

    //save all rovers init position (x,y) coordinates, ignore direction
    for (let j=0; j<roverLocation.length; j++) {
        roversInitPosArr.push(roverLocation[j].pos[0] + " " + roverLocation[j].pos[1]);
    }

    for (let i=0; i<roverLocation.length; i++) {
        curRoverMoveTo = rover(roverLocation[i].size,roverLocation[i].pos,roverLocation[i].face,roverLocation[i].cmd, roversInitPosArr);
        //after rover move, check any collision with other rovers
        //may collide with some rovers not yet move
        if (roversCoordArr.indexOf(curRoverMoveTo.substring(0,3))>=0 || 
            roversInitPosArr.indexOf(curRoverMoveTo.substring(0,3))>=0 ||
            curRoverMoveTo == "Collision with other rover" ||
            curRoverMoveTo == "Rover initial position is out of the plateau." ||
            curRoverMoveTo == "Invalid command, rover stopped!") {
          return `Invalid rovers command set (id: ${roverLocation[i].id}), please resend!`;
        } 
        roversCoordArr.push(curRoverMoveTo.substring(0,3));
        roversInitPosArr.shift(); //remove the original rover position
        roversInitPosArr.push(curRoverMoveTo.substring(0,3));  //append new rover position
        roversOutput.push(curRoverMoveTo);  //keep the rover final position and direction
    }
    return roversOutput;
}

module.exports = {
    roverControl
};

//test command: node roverControl.js
/*
const rovers = [
  {id:1, size:[5,5], pos:[0,0], face:"N", cmd:"LRMM"},
  {id:2, size:[5,5], pos:[0,1], face:"E", cmd:"MM"}
];

console.log(roverControl(rovers));
*/

