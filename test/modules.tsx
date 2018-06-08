// 命名的导出
// 可以在外部使用import { name1 } from ...获取该类型的导出
let name1 = 'test1'
let name2 = 'test2'
export { name1 }  // 声明式导出
export { name2 as name3 } // 相当于下面的
// export let name3 = name2
export const name4 = 'test4'// 最简单的命名式导出
// 直接导出函数需要给函数命名
export function a(params: string): number{
  return +params
}

// 默认的导出
// 默认的导出只能有一个
// 可以是类，函数，对象等
// 可以直接导出匿名函数
// 可以在外部这样使用
// import test from ... 
// test()
export default function(){
}

// import的种类
// import * as all from ... 
// 导入模块中所有的export并在当前作用域，插入变量all

// import { one } from ...
// 导入模块中的被命名为 one 变量的export

// import test from ...
// 导入模块中的export default并命名为test 

// import { one as next } from ...
// 导入模块中的one并重命名为next变量

// import '...'
// 将整个模块座位附加功能导入， 但是不导入模块的额导出成员
// 不是很理解

