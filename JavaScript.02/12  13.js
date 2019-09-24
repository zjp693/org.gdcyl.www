
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

// 输出第二个对象里面name的值
console.log(arr[1].name);

// 将第一个对象gender的属性改为18
arr[0].gender = 18;

// 算出两个age的和
var sum = arr[0].age + arr[1].age;

console.log(sum);
