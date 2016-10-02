function repeatedCharacters(string) {
  var repeated = {};
  for (var i = 0; i < string.length; i++) {
    if (repeated[string[i]]) {
      repeated[string[i]] += 1;
    } else {
      repeated[string[i]] = 1;
    }
  }

  for (let in repeated) {
    if (repeated[let] === 1) {
      delete repeated[let]
    }
  }

  return repeated;
}