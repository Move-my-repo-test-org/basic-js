module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let next = arr[i+1];
        let prev = arr[i-1];
        switch(arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (result.length) result.pop();
                break;
            case '--double-next':
                
                if (i !== arr.length - 1) {
                    result.push(next);
                }
                break;
            case '--double-prev':
                
                if (i !== 0) {
                    result.push(prev);
                }
                break;
            default: 
                result.push(arr[i]);
        }
    }
    return result;
};
