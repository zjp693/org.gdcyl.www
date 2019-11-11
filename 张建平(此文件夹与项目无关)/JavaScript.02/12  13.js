
//定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
//要求：
//1.输出第二个对象里面的属性name的值
//2.将第一个对象里面的属性gender的值修改成数字18
//3.算出2个对象里面属性是age的和
//13.定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，获取colors数组下标是1的值
var arr = [
    {
        name : 'nnnn',
        age : 16,
        gender : '男',
        studentId : 1
    },

    {
        name : 'zzzzz',
        age : 17,
        gender : '男',
        studentId : 1
    }
]

console.log(arr[1].name);

arr[0].gender = 18;

var sum = arr[0].age + arr[1].age;

console.log(sum);
