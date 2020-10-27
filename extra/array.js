//JavaScript Demo: Array.from()
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//The Array.isArray() method determines whether the passed value is an Array.



Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false


//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
if (!Array.of) {
    Array.of = function() {
      return Array.prototype.slice.call(arguments);
      // Or 
      let vals = [];
      for(let prop in arguments){
          vals.push(arguments[prop]);
      }
      return vals;
    }
  }
  
  //JavaScript Demo: Array.concat()
  const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f' ,'g'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


//JavaScript Demo: Array.copyWithin()

const array111 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array111.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array111.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]





//JavaScript Demo: Array.every()


const isBelowThreshold = (currentValue) => currentValue < 40;

const array13 = [1, 30, 39, 29, 10, 13];

console.log(array13.every(isBelowThreshold));
// expected output: true

//JavaScript Demo: Array.fill()

const array14 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array14.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array14.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array14.fill(6));
// expected output: [6, 6, 6, 6]

//JavaScript Demo: Array.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



//JavaScript Demo: Array.find()

const arrayno = [5, 12, 8, 130, 44];

const found = arrayno.find(element => element > 10);

console.log(found);
// expected output: 12



//JavaScript Demo: Array.findIndex()

const arrayq = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(arrayq.findIndex(isLargeNumber));
// expected output: 3

//const arr1 = [0, 1, 2, [3, 4]];

console.log(arrayq.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arrayq.flat(2));
// expected output: [0, 1, 2, [3, 4]]



//Array.prototype.flatMap()

let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]





//JavaScript Demo: Array.forEach()
const arraya = ['a', 'b', 'c','12'];

array1.forEach(element => console.log(element));






//JavaScript Demo: Array.includes()
const array = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));

// expected output: false








//JavaScript Demo: Array.indexOf()

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output


//JavaScript Demo: Array.join()

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join('+'));
// expected output: "FireAirWater"

console.log(elements.join('*'));
// expected output: "Fire-Air-Water"


//JavaScript Demo: Array.keys()
const array00 = ['a', 'b', 'c', 'd'];
const iterator = array00.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2




//JavaScript Demo: Array.lastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1








//JavaScript Demo: Array.map()
const array101 = [1, 4, 9, 16];

// pass a function to map
const map1 = array101.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//JavaScript Demo: Array.pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower"



//JavaScript Demo: Array.push()
const array33= ['pigs', 'goats', 'sheep'];

const count = array33.push('cows');
console.log(count);
// expected output: 4
console.log(array33);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

array33.push('chickens', 'cats', 'dogs');
console.log(array33);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


//JavaScript Demo: Array.reduce()
const array44 = [1, 2, 3, 4,];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array44.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array44.reduce(reducer, 5));
// expected output: 15




//JavaScript Demo: Array.reduceRight()
const array55 = [[0, 1], [2, 3], [4, 5],[6,7]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
  
  console.log(array55);
  // expected output: Array [4, 5, 2, 3, 0, 1]

  


  //JavaScript Demo: Array.reverse()
  const array66 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array66.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array66);
// expected output: "array1:" Array ["three", "two", "one"]



//JavaScript Demo: Array.shift()
const array77 = [ 2, 3];

const firstElement = array77.shift();

console.log(array77);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1



//JavaScript Demo: Array.slice()
const array88 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(array88.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(array88.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(array88.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]



//JavaScript Demo: Array.some()
const array99 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array99.some(even));
// expected output: true


//JavaScript Demo: Array.some()
function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
  [12, 5, 8, 1, 4].some(isBiggerThan10); // true




 

//JavaScript Demo: Array.splice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]






//JavaScript Demo: Array.toString()
const arrayls= [1, 2, 'a', '1a'];

console.log(arrayls.toString());
// expected output: "1,2,a,1a"



//JavaScript Demo: Array.unshift()
const arraylss= [1, 2, 3];

console.log(arrayls.unshift(4, 5));
// expected output: 5

console.log(arrayls);
// expected output: Array [4, 5, 1, 2, 3]



//JavaScript Demo: Array.values()
const arrayt= ['a', 'b', 'c'];
const iteratorr = arrayt.values();

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
