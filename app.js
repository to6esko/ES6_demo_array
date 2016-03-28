import "babel-polyfill"
//Array

//Array.of();
let items = Array.of(1, 2);

console.log(items.length); //2
console.log(items[0]); //1
console.log(items[1]); //2

console.log('.'.repeat(20));

items = Array.of(2);

console.log(items.length); //1
console.log(items[0]); //2

console.log('.'.repeat(20));

items = Array.of('2');

console.log(items.length); //1
console.log(items[0]); //'2'

console.log('.'.repeat(20));

/*
function createArray(arrayCreator, value) {
    return arrayCreator(value);
}

let items1 = createArray(Array.of, value);
*/


// Array.from();

//ES 5
function makeArray(arrayLike) {
	var result = [];
	for (var i = 0; i < arrayLike.length; i++) {
		result.push(arrayLike[i]);
	}
	return result;
}

function doSomething() {
	var args = makeArray(arguments);
}

//with slice();

function makeArray(arrayLike) {
	return Array.prototype.slice.call(arrayLike);
}

function doSomething() {
	var args = makeArray(arguments);
}

//ES 6 
function doSomething() {
	var args = Array.from(arguments);
}


//ES 6 with maping
function translate() {
	return Array.from(arguments, (value) => value + 1);
}
let numbers = translate(1, 2, 3);
console.log(numbers); //[2,3,4]


console.log('.'.repeat(20));


let helper = {
	diff: 1,
	add(value) {
		return value + this.diff;
	}
};

function translate1() {
	return Array.from(arguments, helper.add, helper);
}
let numbers1 = translate1(1, 2, 3);
console.log(numbers1); //[2,3,4]

console.log('.'.repeat(20));



// Iterables
let numbers2 = { * [Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	}
};
let numbers3 = Array.from(numbers2, (value) => value + 1);
console.log(numbers3); //[2,3,4]


console.log('.'.repeat(20));


//find() and findIndex()
let numbers4 = [25, 30, 35, 40, 45];
console.log(numbers4.find(n => n > 33)); //35
console.log(numbers4.findIndex(n => n > 33)); //2


console.log('.'.repeat(20));



//fill()

let numbers5 = [1, 2, 3, 4, 5];
numbers5.fill(1);
console.log(numbers5.toString()); //1,1,1,1,1


let numbers6 = [1, 2, 3, 4, 5];
numbers6.fill(1, 3);
console.log(numbers6.toString()); //1,2,3,1,1


let numbers7 = [1, 2, 3, 4, 5];
numbers7.fill(0, 1, 4);
console.log(numbers7.toString()); //1,0,0,0,1


console.log('.'.repeat(20));



//copyWithin()
//поставяне на стойности в масив, започвайки от индекс 3
//копиране на стойности в масив, започвайки от индекс 0
let numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers8.copyWithin(3, 0);
console.log(numbers8.toString()); //1,2,3,1,2,3,4,5,6,7


//поставяне на стойности в масив, започвайки от индекс 3
//копиране на стойности в масив, започвайки от индекс 0
//спиране на копирането на стойности, в индекс 2
let numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers9.copyWithin(3, 0, 2);
console.log(numbers9.toString()); //1,2,3,1,2,6,7,8,9,10


console.log('.'.repeat(20));


//Array buffer

let buffer = new ArrayBuffer(10); // allocate 10 bytes

console.log(buffer.byteLength); //10

let buffer2 = buffer.slice(4, 6);
console.log(buffer2.byteLength); //2


console.log('.'.repeat(20));



//Views

let buffer3 = new ArrayBuffer(10),
	view = new DataView(buffer3), //cover oll byts
	view2 = new DataView(buffer3, 5, 2); //cover byts 5 and 6

console.log(view.buffer3 === buffer3); //true //my otput false
console.log(view2.buffer3 === buffer3); //true //my otput false
console.log(view.byteOffset); //0
console.log(view2.byteOffset); //5
console.log(view.byteLength); //10
console.log(view2.byteLength); //2


console.log('.'.repeat(20));
//set and get
let buffer4 = new ArrayBuffer(2),
	view3 = new DataView(buffer4);
view3.setInt8(0, 5);
view3.setInt8(1, -1);

console.log(view3.getInt16(0)); //1535
console.log(view3.getInt8(0)); //5
console.log(view3.getInt8(1)); //-1


console.log('.'.repeat(20));


let buffer5 = new ArrayBuffer(10),
	view4 = new Int8Array(buffer5),
	view5 = new Int8Array(buffer5, 5, 2);

console.log(view4.buffer5 === buffer5); //true //my output false
console.log(view5.buffer5 === buffer5); //true //my output false
console.log(view4.byteOffset); //0
console.log(view5.byteOffset); //5
console.log(view4.byteLength); //10
console.log(view5.byteLength); //2


console.log('.'.repeat(20));


let ints = new Int16Array(2),
	floats = new Float32Array(5);

console.log(ints.byteLength); //4
console.log(ints.length); //2
console.log(floats.byteLength); //20
console.log(floats.length); //5


console.log('.'.repeat(20));


//Size for element
console.log(Int8Array.BYTES_PER_ELEMENT); //1
console.log(Int16Array.BYTES_PER_ELEMENT); //2
console.log(Int32Array.BYTES_PER_ELEMENT); //4
console.log(Float32Array.BYTES_PER_ELEMENT); //4
console.log(Float64Array.BYTES_PER_ELEMENT); //8


console.log('.'.repeat(20));



//Прилики с Масиви
let ints1 = new Int16Array([25, 50]),
	ints2 = new Int32Array(ints1);

console.log(ints1.buffer === ints2.buffer); //false

console.log(ints1.byteLength); //4
console.log(ints1.length); //2
console.log(ints1[0]); //25
console.log(ints1[1]); //50

console.log(ints2.byteLength); //8
console.log(ints2.length); //2
console.log(ints2[0]); //25
console.log(ints2[1]); //50

console.log('.'.repeat(20));

let ints3 = new Int16Array([25, 50]);

console.log(ints3.length); // 2
console.log(ints3[0]); // 25
console.log(ints3[1]); // 50

ints3[0] = 1;
ints3[1] = 2;

console.log(ints3[0]); // 1
console.log(ints3[1]); // 2

//map
let ints4 = new Int16Array([25, 50]),
	mapped = ints4.map(v => v * 2);

console.log(mapped.length); //2
console.log(mapped[0]); //50
console.log(mapped[1]); //100
console.log(mapped instanceof Int16Array); // true



//spread
let ints5 = new Int16Array([25, 50]),
	intsArray = [...ints];

console.log(ints5 instanceof Array); //false
console.log(intsArray instanceof Array); // true
console.log(intsArray[0]); // 25
console.log(intsArray[1]); // 50


//Array.of() and Array.from()

let ints6 = Int16Array.of(25, 50),
	floats6 = Float32Array.from([1.5, 2.5]);
console.log(ints6 instanceof Int16Array); //true
console.log(floats6 instanceof Float32Array); //true

console.log(ints6.length); //2
console.log(ints6[0]); //25
console.log(ints6[1]); //50

console.log(floats6.length); //2
console.log(floats6[0]); //1.5
console.log(floats6[1]); //2.5



console.log('.'.repeat(20));



//Разлики с Масиви

let ints7 = new Int16Array([25, 50]);

console.log(ints7 instanceof Array); // false
console.log(Array.isArray(ints7)); // false


let ints8 = new Int16Array([25, 50]),
	mapped2 = ints8.map(v => 'hi');

console.log(mapped2.length); //2
console.log(mapped2[0]); //0
console.log(mapped2[1]); //0
console.log(mapped2 instanceof Int16Array); //true
console.log(mapped2 instanceof Array); //false

let ints9 = new Int16Array(4);
ints9.set([25, 50]);
ints9.set([75, 100], 2);

console.log(ints9.toString()); //25,50,75,100


let ints10 = new Int16Array([25, 50, 75, 100]),
	subints1 = ints10.subarray(),
	subints2 = ints10.subarray(2),
	subints3 = ints10.subarray(1, 3);

console.log(subints1.toString()); //25,50,75,100
console.log(subints2.toString()); //75,100
console.log(subints3.toString()); //50,75