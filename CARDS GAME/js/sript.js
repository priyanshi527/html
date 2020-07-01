/*function fun() {
var age=prompt("Enter age");
console.log(age);
}
fun();
//while loops
var num=0;
while(num<100){
	num+=1;
	console.log(num);
}
//for loop
for (let i = 0; i < 100; i++)
	console.log(num);*/
//Strings
let fruit="apple";
let moref="banana\ncherry"
console.log(moref);
console.log(fruit.length);
console.log(fruit.indexOf('ppl'));
console.log(fruit.slice(1,4));
console.log(fruit.replace('app','12345'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));//split by character
//we can do split by comma or anything as we desire!!
//Array
//two ways of initializing it
let fruits =['banana' , 'apple' ,'cherry' , 'orange'];
let vegetables = new Array('tomato' , 'potato' ,'brocolli' , 'brinjal');
console.log(fruits[2]);
fruits[0]='pear';
console.log(fruits);
for (var i = fruits.length - 1; i >= 0; i--) {
	console.log(fruits[i]);
};
console.log('to string -',fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits,fruits.pop(),fruits);
console.log(fruits.push('blackberry'),fruits);
console.log(fruits[4]);
fruits[4]='new fruit';
//this could be also written as fruits[fruits.length]='new fruit';
console.log(fruits);
fruits.shift();//this removes the first element from a array
console.log(fruits);
fruits.unshift('kiwi');//adds first element to the array
console.log(fruits);
let allgroceries= fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort());
let someNumber = [5,10,2,6,89,3];
console.log(someNumber.sort(function(a,b){return a-b}));//sorted in ascending order
console.log(someNumber.sort(function(a,b){return b-a}));//sorted in descending order
let emptyArray = new Array();
for (var i = 0; i < 10; i++) {
	emptyArray.push(i);
}
console.log(emptyArray);
//objects
let student=(first: 'Priyanshi' ,last: 'Rawat');
console.log(student.first);
console.log(student.last);