function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = '12';
console.log(sayHello(user));

// 无返回值的函数
function test(): void {
  console.log('1');
}

// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
let name1: undefined = undefined;
let name2: null = null;

// any 类型，则允许被赋值为任意类型。
// 且可以使用任意属性
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let all: any = 'sdf'
all.my = 1
let change: object = {}

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
// 如果定义是赋值了，则会默认为其指定其赋值的类型

// 联合类型，百年史该变量可以被赋值为多种类型
let diff: string | number

// 接口就相当于是类
// 使用接口类型定义的变量
// 它拥有的属性应该与该接口一致
interface Person {
  name: string,
  age: number
}

let me: Person = {
  name: 'Jhon',
  age: 11
}

// 如果不需要完全一制
// 则可以将属性设置为可选也就是加？
// 这时仍然不允许添加未定义的属性：
interface Person1 {
  name: string,
  age?: number,
  school?: string
}

let test1: Person1 = {
  name: 'baba',
}

// 可以输入任意属性
// 定义了任意属性取 string 类型的值。
// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：
// 也就是说任意属性定义时最好使用 any
interface PersonAny {
  [propName: string]: any;
}

let anyTest: PersonAny = {
  name: 121,
  fuc: 122
}

// 只读属性是定义后就不能更改的了
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person3 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

// 只允许出现number的数组
let list1: number[] = [1, 2, 4]
// 使用数组泛型来表示数组
let fibonacci: Array<number> = [1, 2, 3, 5];
// any可以让数组获取任意值
let anyList: any[] = [1, 3, 5, 'we', { dfdf: 1 }]
// 类数组不是数组类型，所以不可赋值于数组变量
// 常见的类数组都有自己的接口定义
function argus() {
  let args: IArguments = arguments;
}

// 一个函数有输入和输出，
// 要在 TypeScript 中对其进行约束，
// 需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number): number {
  return x + y;
}
// 输入多余的（或者少于要求的）参数，是不被允许的：

// 函数表达式则需要左右皆约束
// => 左边表示参数，右边表示输出
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
// 也可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}
// 函数中的可选参数与接口中相同
// 可选参数必须接在必需参数后面。
// 换句话说，可选参数后面不允许再出现必须参数了
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');

// ES6 中，我们允许给函数的参数添加默认值，
// TypeScript 会将添加了默认值的参数识别为可选参数：
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName1(firstName: string = 'tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let cat2 = buildName1(undefined, '1212');

// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
// 事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
// 为了使得参数自由度高，可使用剩余参数定义为any数组的方法
// rest 参数只能是最后一个参数
let a: any[]
function push(...items: any[]) {
  items.forEach(function (item) {
    a.push(item);
  });
}
push(1, 23, 54, 6, 'sd', { a: 1 })

// **函数重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 精确的表达，
// 输入为数字的时候，输出也应该为数字，
// 输入为字符串的时候，输出也应该为字符串。
// 可以使用重载定义多个 reverse 的函数类型：
function reverse(x: number): number
function reverse(x: string): string
// 这里产生莫名错误了
// function reverse(x: number | string): number | string {
function reverse(x: number | string): number | string | undefined {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

// **类型断言
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型里共有的属性或方法
// 所以可以先给该变量做断言
// 这样就可以使用该类型特有的属性或方法了
function getLength(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
    // 一定要写全
    // return something.length;
  } else {
    return something.toString().length;
  }
}
