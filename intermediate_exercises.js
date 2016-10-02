function oddElementsOf(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);

//-------------

function combinedArray(even, odd) {
  var newArray = [];

  for (var i = 0; i < even.length; i++) {
    newArray.push(even[i]);
    newArray.push(odd[i]);
  }

  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters);

//---------------

function mirroredArray(arr) {
  arr1 = arr.slice();
  return arr1.concat(arr.reverse());
}

testArr = [1,2,3,4];
console.log(mirroredArray(testArr));

//----------------

function joinArray(arr, joiner) {
  return arr.join(joiner || "");
}

joinArray(['a', 'b', 'c'], '+');
joinArray([1, 4, 1, 5, 9, 2, 7]);

//---------------

function sortDescending(arr) {
  arr.sort(function(a, b) {
    return a <= b;
  });
  return arr;
}

sortDescending([23, 4, 16, 42, 8, 15]);

//---------------

function matrixSums(arr) {
  arr.forEach(function(innerArray, idx) {
    arr[idx] = innerArray.reduce(function(sum, el) {
      return sum += el;
    });
  });

  return arr;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);

//--------------

function uniqueElements(arr) {
  var newArray = [];

  arr.forEach(function(el) {
    if (!newArray.some(function(existEl) {
      return el === existEl;
    })) {
      newArray.push(el);
    }
  });

  return newArray;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);


