var test = function () {}

test();

function test2() {

}
test2();

// Arrow

var arrow = () => 123;
arrow();

var testResult = arrow();

function t() {
    return 123
}

///////////

var x = () => 123
console.log(x())

var x = (a) => 123 + a;
console.log(x(123))

var x = a => 123 + a;
console.log(x(123))

var x = (a, b) => a + b;
console.log(x(2,3))


var x = (a, b) => {
    var z = a + b;
    return Math.sqrt(z);
}
console.log(x(10,71))

////////////////////////

const array = [1,2,3,4,5];
array.forEach(element => console.log(element));

const array1 = [1,2,3,4,5];
array1.forEach((element, index) => console.log(element, index));

const array2 = [1,2,3,4,5];
array2.forEach((element, index, arr) => console.log(element, index, arr));

var polindrome = function(strInput) {
    return strInput.toLowerCase() === strInput.toLowerCase().split('').reverse().join('')
}
console.log(polindrome('Anna'))

var polindrome2 = strInput => strInput.toLowerCase() === strInput.toLowerCase().split('').reverse().join('')
console.log(polindrome('simeon'))

// Anonime Function

// var a = function() {
//     alert(hello)
// }
// console.log(a)

// (function() {
//     alert(123);
// })
// console.log()

// (function(a,b,c) {
//     alert(123);
// })()

////////////////////////////////////////

function scope() {
    this.name = 'Test'
}
console.log(scope.name)

var test = new scope()
console.log(test.name)

/////////////////////////////////////////

// var t = function() {
//     return this;
// }
// new t()
// t.bind({
//     a: 1,
//     b: 2    
// })
// f() {
//     return this;
// }

// t.bind({
//     a: 1,
//     b: 2  
// })()

