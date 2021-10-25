function rover(size, position, faceTo, cmd) {
    const marsPlateauSize = size;
    const roverPos = (position === undefined) ? [0, 0] : position;
    const roverFaceTo = (faceTo === undefined) ? "N" : faceTo;
    const roverCmd = (cmd === undefined) ? "" : [...cmd];
    //showRoverLocation(marsPlateauSize,roverPos,roverFaceTo);

    
    return `Mars Plateau Size is [${marsPlateauSize}].\nRover initial position is [${roverPos}].\nRover face to ${roverFaceTo}.\nCommand sent: ${roverCmd}`
}

function move() {
    return "Mars Rover is moving!!!"
}

function turn() {
    return "Mars Rover is turning right or left!!!"
}

function showRoverLocation(size,pos,face) {
    return return `Mars Plateau Size is [${size}].\nRover initial position is [${pos}].\nRover face to ${face}.`
}

module.exports = {
    rover,
    move,
    turn,
    showRoverLocation
};