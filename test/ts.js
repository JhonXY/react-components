"use strict";
function sayHello(person) {
    return 'Hello, ' + person;
}
let user = '12';
console.log(sayHello(user));
function test() {
    console.log('1');
}
let name1 = undefined;
let name2 = null;
let all = 'sdf';
all.my = 1;
let change = {};
let diff;
let me = {
    name: 'Jhon',
    age: 11
};
let test1 = {
    name: 'baba',
};
let anyTest = {
    name: 121,
    fuc: 122
};
let tom = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
let list1 = [1, 2, 4];
let fibonacci = [1, 2, 3, 5];
let anyList = [1, 3, 5, 'we', { dfdf: 1 }];
function argus() {
    let args = arguments;
}
function sum(x, y) {
    return x + y;
}
let mySum = function (x, y) {
    return x + y;
};
let mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');
function buildName1(firstName = 'tom', lastName) {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let cat2 = buildName1(undefined, '1212');
let a;
function push(...items) {
    items.forEach(function (item) {
        a.push(item);
    });
}
push(1, 23, 54, 6, 'sd', { a: 1 });
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
//# sourceMappingURL=ts.js.map