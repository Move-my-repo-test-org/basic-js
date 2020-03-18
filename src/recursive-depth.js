module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.find(el => Array.isArray(el)) === undefined) {
            return 1;
        } else {
            let depth = 0;

            if (arr.filter(el => Array.isArray(el)).length !== 1) {
                for (let innerArr of arr.filter(el => Array.isArray(el))) {
                    depth = Math.max(1 + this.calculateDepth(innerArr), depth);
                    
                }
                return depth;
            } else {
                return 1 + this.calculateDepth(arr.find(el => Array.isArray(el)));
            }
            
        }
    }
};