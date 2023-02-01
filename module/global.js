//导出
// export let name="张三";
// export let age=20;

// export const URL = "http://baidu.com";

// //导出方法
// export function getName(){
//     return '李四';
// }

let name = "孙悟饭";
let age = 20;
const URL = "http://baidu.com";
function getName(){
    return name;
}

export {
    name,
    age,
    URL,
    getName
}