// 1a
Mutating Array Methods modify the original array, i.e., they change the original array. 

Examples
push(): Adds one or more elements to the end of an array and returns the new length of the array.
pop(): Removes the last element from an array and returns that element.
splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
reverse(): Reverses the order of the elements in an array.
sort(): Sorts the elements of an array in place and returns the sorted array.

// 1b
Non-Mutating Array Methods do not modify the original array. Instead, they return a new array or some other value. 

Examples
concat(): Joins two or more arrays and returns a new array that contains all the elements from the original arrays.
slice(): Returns a new array that contains a copy of a portion of the original array.
filter(): Returns a new array that contains all the elements from the original array that pass a test specified by a callback function.
map(): Returns a new array that contains the results of applying a callback function to each element of the original array.
reduce(): Applies a callback function to each element of an array to reduce the array to a single value.

// 2
// Initial array
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
const index = languages.indexOf('PHP');
if (index !== -1) {
  languages.splice(index, 1, 'Go', 'Rust');
}

// 3
fruits = ['apple', 'mango', 'orange']

// 4
function max(numbers) {
  let maxNumber = numbers[0]; // set the initial max to the first element in the array
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]; // update the max number if a larger number is found
    }
  }
  return maxNumber; // return the maximum number
}

// 5
function valTimesIndex(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * i); // multiply the number with its index and add to the result array
  }
  return result; // return the result array
}





