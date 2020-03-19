module.exports = function repeater(str, options) {
    str += '';

    if ('addition' in options) {
        let addition = new Array(options.additionRepeatTimes).fill(String(options.addition));
        if ('additionSeparator' in options) {
            addition = addition.join(options.additionSeparator);
        } else {
            addition = addition.join('|');
        }
        str += addition;
    }


    
    let result = new Array(options.repeatTimes).fill(str);
    
    if ('separator' in options) {
        return result.join(options.separator);
    } else {
        return result.join('+');
    }
    
};
  