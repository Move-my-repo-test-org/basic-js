const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof(sampleActivity) !== 'string'|| parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) <= 0 || isNaN(parseFloat(sampleActivity))) {
    return false;
  } else {
    let ratioOfActivity = MODERN_ACTIVITY / parseFloat(sampleActivity);
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(ratioOfActivity) / k);
  }
};
