function rover(size, position) {
    const marsPlateauSize = size;
    const roverPos = (position === undefined) ? [0, 0] : position;

    return `Mars Plateau Size is [${marsPlateauSize}]. Rover initial position is [${roverPos}]`
}

function move() {
    return "Mars Rover is moving!!!"
}

function turn() {
    return "Mars Rover is turning right or left!!!"
}

function showRoverLocation() {
    return "Display rover location (x,y,face)!"
}

module.exports = {
    rover,
    move,
    turn,
    showRoverLocation
};