function rover(size, position, faceTo) {
    const marsPlateauSize = size;
    const roverPos = (position === undefined) ? [0, 0] : position;
    const roverFaceTo = (faceTo === undefined) ? "N" : faceTo;

    return `Mars Plateau Size is [${marsPlateauSize}].\nRover initial position is [${roverPos}].\nRover face to ${roverFaceTo}.`
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