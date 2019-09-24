//定义一个数组，里面放都是数字的类型
//要求：
//1.把下标是3对应的元素获取到
//2.把数组第一个元素修改成数字666
//3.求出下标是2和4对应的元素的和赋值给下表是1
// 数组的下标从0开始
//         0 1 2 3 4 5 6 7 8
var name =[1,2,3,4,5,6,7,8,9]

console.log(name[3]);

name[0] = 666;
console.log(name[0]);

var sum = name[2] + name[4];

name[1] = sum;
console.log(name)
