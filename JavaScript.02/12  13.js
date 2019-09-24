
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
