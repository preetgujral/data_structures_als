//re-implement: Push, Pop, Shift, and Unshift for Array.prototype, without using any library functions. Also add some Mocha tests to verify correctness.

//can only use array.length and assigning by indexing i.e array[i]=

array = [1,2,1,3,3,4]

var rpush = function(array, arg) {
  array[array.length]=arg
  return array.length
};

var rpop = function(array) {
  length = array.length
  popped = array[array.length-1]
  array.length = array.length-1
  return popped
};

var runshift = function(array, arg) {
  i = array.length - 1
  while (i >= 0) {
    array[i + 1] = array[i];
    i--;
  };
  array[0] = arg;
  return array.length;
};

var rshift = function(array) {
  if (array.length == 0) {
    return
  } else {
    shifted = array[0]
    for (i = 1; i < array.length; i++) {
      array[i-1] = array[i]
    }
    array.length = array.length-1
    return shifted
  };
};

/*Challenge 2 - unique: implement a function called unique. It takes an array and returns a copy of the array with all the duplicates removed.*/
array = [1,2,1,3,3,4]
//want it to return [1,2,3,4]

var unique = function(array) {
  newarray = [];
  for (i = 0; i < array.length; i++) {
    if (newarray.indexOf(array[i])<0) {
      newarray.push(array[i]);
    };
  };
  return newarray;
};

//frequency2: given an array of english words, figure out what the most common letter (anywhere in a word) is.

//marty note
//Just a heads up that on the letter frequency problem in the assignment, only count 1 instance per word.  So for `[ ‘dog’, ‘ladder’, ‘aardvark’ ]` there are 3 words that have `d`, 2 words have `a`, etc.

var dictionary = ['dad', 'ladder', 'tard', 'lard' ]

var frequency2 = function(anArray) {
  var results = '';
  allLetters = anArray.join('');
  noRepeat = unique(allLetters)
  alphabet = {};
  for (i = 0; i < noRepeat.length; i++) {
    alphabet[noRepeat[i]] = 0;
  };
  newarray = '';
  temp=[];
  for (f = 0; f < anArray.length; f++) {
    temp[f] = unique(anArray[f]);
    newarray = [];
    for (g= 0; g < temp.length; g++ ) {
      newarray = newarray.concat(temp[g])
    };
  };

  for (h = 0; h < newarray.length; h++) {
    alphabet[newarray[h]]++;
  };
  for (var key in alphabet) {
    if (alphabet[key] === anArray.length) {
    results+=key;
    };
  };
  return results;
};

