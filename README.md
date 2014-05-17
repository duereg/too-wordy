[![Build Status](https://travis-ci.org/duereg/word-complexity.svg?branch=master)](https://travis-ci.org/duereg/word-complexity)

# Word Complexity

npm module for checking for complex words and phrases

## Install

```shell
npm install word-complexity
```

## Use

```javascript
var complexity = require('word-complexity');

var problems = complexity('An abundance of long winded words to accentuate this boring sentence......');
// problems -> [{ match: "abundance", index: 3, offset: 9 }, {match: accentuate, ....}]
```

## License
MIT
