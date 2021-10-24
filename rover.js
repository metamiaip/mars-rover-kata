function rover(size) {
    const marsPlateauSize = size
    
    return `Mars Plateau Size is [${marsPlateauSize}]`
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