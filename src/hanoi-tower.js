module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};
    result.turns = 2 ** disksNumber - 1;
    result.seconds = (2 ** disksNumber - 1) / (turnsSpeed / 3600);
    return result;
}