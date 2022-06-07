/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 15:34:37
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 16:03:09
 * @FilePath: \WEB\OOCL\day6-10\JavaScript-String-english-2019-10-11-9-32-19-0\index.js
 */
// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function titleCase(s) {
  var i, ss = s.toLowerCase().split(/\s+/);
  for (i = 0; i < ss.length; i++) {
    ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
  }
  return ss.join(' ');
}
console.log(titleCase(sentence));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.slice(1));
