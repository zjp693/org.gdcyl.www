//自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
//要求：
  //1. 通过2种方式定义对象
  //2. 通过2种方式给对象添加一个属性 gender,值是"男"
  //3. 获取属性姓名和年龄的值
  //4. 删除属性体重
var people = {
    name : '靓仔',
    age : 20,
    height: 175,
    weight: '75KG',
    xunhao: 20190616,
    phone: 'oppo'
}
people.ender= '男'
console.log(people)

var people = {
    name : '广东靓仔',
    age : 18,
    height: 172,
    weight: '60KG',
    xunhao: 20190808,
    phone: 'vivo'
}
var ender='ender'
people[ender]= '男';
console.log(people)

var people =  new Object({
    name : '牛逼',
    age : 25,
    height: 180,
    weight: '78KG',
    xunhao: 201888,
    phone: 'OPPO'
})
console.log(people)