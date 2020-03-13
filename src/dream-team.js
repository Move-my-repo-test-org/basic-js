module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let teamName = [];
  for (let name of members) {
    if (typeof(name) == 'string') {
      teamName.push(name.trim()[0]);
    }
  }
  return teamName.map(char => char.toUpperCase()).sort().join('');
};