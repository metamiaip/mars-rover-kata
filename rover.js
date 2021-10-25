function rover(size, position, faceTo, cmd) {
    const marsPlateauSize = size;
    const initPos = (position === undefined) ? [0, 0] : position;
    const initFace = (faceTo === undefined) ? "N" : faceTo;
    let roverPos = (position === undefined) ? [0, 0] : position;
    let roverFaceTo = (faceTo === undefined) ? "N" : faceTo;
    const roverCmd = (cmd === undefined) ? "" : [...cmd];
    let tmpRoverPos = (position === undefined) ? [0, 0] : position;
    //showRoverLocation(marsPlateauSize,roverPos,roverFaceTo);

    for(let i = 0; i < roverCmd.length; i++) {
        if (roverCmd[i] === 'L' || roverCmd[i] === 'R') {
            roverFaceTo = turn(roverFaceTo,roverCmd[i]);
        } else if (roverCmd[i] === "M") {
            tmpRoverPos = move(roverPos,roverFaceTo,roverCmd[i]);
            if (tmpRoverPos[0]<0 || 
                tmpRoverPos[1]<0 ||
                tmpRoverPos[0]>marsPlateauSize[0] ||
                tmpRoverPos[1]>marsPlateauSize[1] ) 
                    //throw new Error("Invalid move command, rover stopped!");
                    return "Invalid command, rover stopped!";
            
            roverPos = tmpRoverPos;
        } else {
            return "Invalid command, rover stopped!"; 
        }

    }

    return `Mars Plateau Size is [${marsPlateauSize}].\nRover initial position is [${initPos}].\nRover face to ${initFace}.\nCommand sent: ${roverCmd}.\nFinal rover position:${roverPos[0]} ${roverPos[1]} ${roverFaceTo}.`
}

function move(pos,faceTo,cmd) {
    if (faceTo === "N") {
        return [pos[0],pos[1]+1];
    } else if (faceTo === 'E') { 
        return [pos[0]+1,pos[1]];
    } else if (faceTo === 'S') { 
        return [pos[0],pos[1]-1];
    } else if (faceTo === 'W') { 
        return [pos[0]-1,pos[1]];
    }
    //return "Mars Rover is moving!!!"
}

function turn(faceTo,cmd) {
    if (faceTo === "N") {
        return (cmd === "L") ? "W" : "E";
    } else if (faceTo === "E") {
        return (cmd === "L") ? "N" : "S";
    } else if (faceTo === "S") {
        return (cmd === "L") ? "E" : "W";
    } else if (faceTo === "W") {
        return (cmd === "L") ? "S" : "N";
    }
    //return `Mars Rover turned ${cmd}`
}

function showRoverLocation(size,pos,face) {
    return `Mars Plateau Size is [${size}].\nRover initial position is [${pos}].\nRover face to ${face}.`
}

module.exports = {
    rover,
    move,
    turn,
    showRoverLocation
};