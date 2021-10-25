function rover(size, position, faceTo, cmd) {
    const marsPlateauSize = size;
    const initPos = (position === undefined) ? [0, 0] : position;
    const initFace = (faceTo === undefined) ? "N" : faceTo;
    let roverPos = (position === undefined) ? [0, 0] : position;
    let roverFaceTo = (faceTo === undefined) ? "N" : faceTo;
    const roverCmd = (cmd === undefined) ? "" : [...cmd];
    //showRoverLocation(marsPlateauSize,roverPos,roverFaceTo);

    for(let i = 0; i < roverCmd.length; i++) {
        if (roverCmd[i] === 'L' || roverCmd[i] === 'R') {
            roverFaceTo = turn(roverFaceTo,roverCmd[i]);
        }
    }

    return `Mars Plateau Size is [${marsPlateauSize}].\nRover initial position is [${initPos}].\nRover face to ${initFace}.\nCommand sent: ${roverCmd}.\nFinal rover position:${roverPos[0]} ${roverPos[1]} ${roverFaceTo}.`
}

function move(cmd) {
    return "Mars Rover is moving!!!"
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