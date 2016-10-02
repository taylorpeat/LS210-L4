function missingNumbers(arr) {
  var start = arr[0];
  var end = arr[arr.length -1];
  var missingNumbers = [];

  for (var i = start + 1; i < end; i++) {
    if (arr.indexOf(i) === -1) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

