var matcher = function(regex, text, type) {
  var results = [];

  while (result = regex.exec(text)) {
    results.push({type: type, match: result[0], index: result.index, end: regex.lastIndex, offset: result[0].length});
  }

  return results;
};

module.exports = matcher;