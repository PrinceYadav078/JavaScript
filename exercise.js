let numarr = [1, 2, 6, 3, 8, 5, 3, 8, 10];

// sum of array elements
function sumarr(arr) {
  let result = 0;
  for (num of arr) {
    result += num;
  }
  return result;
}
console.log("sum of array elements are =>", sumarr(numarr));

//max elem of array

function max(arr) {
  let result = arr[0];
  for (elem of arr) {
    if (elem >= result) {
      result = elem;
    }
  }
  return result;
}

console.log(`max elem in the array ${numarr} is ${max(numarr)} `);
console.log(
  numarr.sort((a, b) => {
    return a - b;
  })
); // sorting of array

// frequency of character in string
function letterfrequency(str) {
  let freq = {};
  let ch;
  for (ch of str) {
    if (ch in freq) {
      freq[ch] += 1;
    } else {
      freq[ch] = 1;
    }
  }
  return freq;
}

// console.log(frequency("i am a developer"));

// frequency of words

function wordfrquency(str) {
  let freq = {};
  let w_arr = str.split(" ");
  for (word of w_arr) {
    if (word in freq) {
      freq[word]++;
    } else {
      freq[word] = 1;
    }
  }
  return freq;
}
console.log(wordfrquency("lol what lol"));

const wordfrquency2 = (str) => {
  const word = str.split(" ");
  return letterfrequency(word); // reuse letter frequency function which define on line 54
};
console.log(wordfrquency2frquency("hello whats going on"));
