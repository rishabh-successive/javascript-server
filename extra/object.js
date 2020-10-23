//JavaScript object method.

//Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }



//JavaScript Demo: Object.create()
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'rishabh'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"


  //avaScript Demo: Object.defineProperties()

  const object1 = {};

  Object.defineProperties(object1, {
    property1: {
      value: 42,
      writable: true
    },
    property2: {
    value:8532,
    }
  });


  //JavaScript Demo: Object.freeze()

  const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42
  
  console.log(object1.property2);

  //JavaScript Demo: Object.entries()
  const object12 = {
    a: 'successive',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object12)) {
    console.log(`${key}: ${value}`);
  }

  //JavaScript Demo: Object.fromEntries()
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const objn= Object.fromEntries(entries);
  
  console.log(objn);
  // expected output: Object { foo: "bar", baz: 42



  //JavaScript Demo: Object.getOwnPropertyDescriptor()

  const object14 = {
    property1: 42
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object14, 'property1');
  
  console.log(descriptor1.configurable);
  // expected output: true
  
  console.log(descriptor1.value);
  // expected output:


  //JavaScript Demo: Object.getOwnPropertyDescriptors()


  const object16 = {
    property1: 46
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object16);
  
  console.log(descriptors1.property1.writable);
  // expected output: true
  
  console.log(descriptors1.property1.value);
  // expected output: 46

  //JavaScript Demo: Object.getOwnPropertyNames()

  const object17 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  console.log(Object.getOwnPropertyNames(object17));
  // expected output: Array ["a", "b", "c"]

  //JavaScript Demo: Object.getOwnPropertyNames()

  const ob1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  console.log(Object.getOwnPropertyNames(ob1));
  // expected output: Array ["a", "b", "c"]
  

  //JavaScript Demo: Object.getOwnPropertySymbols()

  const object18 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object18[a] = 'localSymbol';
object18[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object18);

console.log(objectSymbols.length);
// expected output
  

//JavaScript Demo: Object.getPrototypeOf()

const prototype1 = {};
const object20= Object.create(prototype1);

console.log(Object.getPrototypeOf(object20) === prototype1);
// expected output: true

//The Object.is() method determines whether two values are the same value.


Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true



//JavaScript Demo: Object.isExtensible()

const demoo = {};

console.log(Object.isExtensible(demoo));
// expected output: true

Object.preventExtensions(demoo);

console.log(Object.isExtensible(demoo));
// expected output: false


//JavaScript Demo: Object.isFrozen()

const fix = {
    property1: 42
  };
  
  console.log(Object.isFrozen(fix));
  // expected output: false
  
  Object.freeze(fix);
  
  console.log(Object.isFrozen(fix));
  // expected output: true
  

//JavaScript Demo: Object.isSealed()

const object111= {
    property1: 42
  };
  
  console.log(Object.isSealed(object111));
  // expected output: false
  
  Object.seal(object111);
  
  console.log(Object.isSealed(object111));
  // expected output: true




//JavaScript Demo: Object.keys()

const object122 = {
    motivation : 'go the extra mile its never crowded',
    value: 42,
    boolean: false
  };
  
  console.log(Object.keys(object122));
  // expected output: Array ["a", "b", "c"]


  //
  