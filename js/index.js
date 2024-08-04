/* 
  variable structure

  var a = 1; // declare and initialization

  var is the keyword
  a is the variableName
  = is an assignment 
  1 is the data of type number
  ; is the end of variable declaration statement;

  var b; // is an uninitialized variable
*/
var a = 1;

console.log(a);

let b = 2;
console.log(b);

const c = 3;  // global variable
console.log(c)

// variable scope


// var does not respect variable scope
var a = 4; // updating a
console.log(a)

// let and const respect variable scope

 b = 22; // updating b
 let b1;
  b1 = 55;
 console.log(b1)
 console.log(b)

//  c = 33;

// local variable block
{
    const c = 44; // local variable
    var d = 6;
    console.log(c,d)
 }
console.log(d)

// 
/*  */

let Age = 77;
console.log(Age);

//? arithmetic operators

/* 
  + plus
  - minus
  / division 2/2 = 1; 1 r 0
  *  multiplication 
  % modulus 2%2 = 0; 1 r 0; 5%2 = 1; 2 r 1
  ** rise to power; 2**3 = 2x2x2 = 8
  ++ increment by 1
  -- decrement by 1 
 
*/

let e = 7; let f=5;

console.log(e + f); // 12
console.log(e - f); // 2
console.log(e * f); // 35
console.log(e / f); // 1.
console.log(e % f); // 2
console.log(e ** f); // 
console.log(++e); // 8 e has be updated from 7 to 8
console.log(--e); // 7

//? comparison operators

/* 
  > greater than
  < less than
  == equal to
  === strictly equal to
  != not equal to
  !== strictly not equal to
  && logical and
  || logical or
  ! logical not
  >= greater than or equal to
  <= less than or equal to

  let isMale = true; !isMale = false

  && is like multiplication
  true=1 and false =0
  
  condition1 condition2 result    action
      1          0         0      false
      0          1         0      false
      0          0         0      false
      1          1         1      true


  || is like addtion
  true=1 and false =0
  
  condition1 condition2 result    action
      1          0         1      true
      0          1         1      true
      0          0         0      false
      1          1         1      true

*/

let g= 9;

console.log(g > 7); // true
console.log(g < 7); // false
console.log(g == 7); // false
console.log(g == 9); // true
console.log('g === 9',g === 9); // true
console.log(g === '9'); // false
console.log(g == '9'); // true
console.log(!(g == '9')); // false
console.log(g > 10);// false
console.log(g >= 10);// false
console.log(g <= 10);// true
console.log(g < 10);// true
console.log(g > 12 && 15 < 9); //false
console.log(g > 12 && 15 > 9); //false
console.log(g < 12 && 15 > 9); //true
console.log(g > 12 || 15 < 9); //false
console.log(g > 12 || 15 > 9); //true
console.log(g < 12 || 15 > 9); //true

//? compound operators

/* 
 += a+=b expands to a= a+b
 -= a-=b expands to a= a-b
 *= a*=b expands to a= a*b
 /= a/=b expands to a= a/b
 %= a%=b expands to a= a%b
*/

let t = 3;
console.log(t+=5); // t = 8
console.log(t-=2); // t = 6
console.log(t /=2); // t = 3
console.log(t *=5); // t = 15
console.log(t %=5); // t = 0

let x = 45; y = 15;

console.log(x+=y); // 60
console.log(x-=y); // 45
console.log(x/=y); // 3
console.log(x*=y); // 45
console.log(x%=y); // 0
console.log(y+=x); // 0

//? other operators

/* 
  = assignment operator
*/

//? boolean

let isLoggedIn = true;
let isMarried = false;

console.log(isLoggedIn)

console.log(typeof a)
console.log(typeof isLoggedIn);

let data = null;
console.log(data, typeof data);

let owner;
owner = 'Amadi Chile'
console.log(owner, typeof owner);

let catItems = 0;
console.log(catItems, typeof catItems);

let rand = Math.random();
console.log(rand)
console.log(Math.round(2.5))
console.log(Math.round(2.4))
console.log(Math.floor(2.4))
console.log(Math.floor(2.7))
console.log(Math.ceil(2.4))
console.log(Math.ceil(2.6))
console.log(Math.PI)
console.log(2**2);
console.log(Math.pow(2,3));

// generate a random number from 0 t0 10

let rand1 = Math.random();
     rand1*=10;
     rand1 = Math.round(rand1);
     console.log(rand1)
//? string

/* 
  let str = 'value';
*/

let str1= 'Chile';
let str2 = "Amadi"
console.log(str1,typeof str1)
console.log(str2,typeof str2)

console.log(str1.length);

/* 
  index  01234
  string Chile
  length 12345

  stringName[validIndex]
*/

console.log(str1[2]);
str1= str1.replace('i','a'); // replacing i with a
str1= str1.replace('le','lie'); // replacing le with lie
str1= str1.replace('Ch','');//  deleting Ch with ''

console.log(str1)

console.log(str2.split('a')[0])

// + or .concat

console.log(str1 + ' ' + str2);
console.log(str1.concat(' ').concat(str2))

let fullName = 'John Doe';
let favouriteColor = 'Yellow';
let country = 'Kenya';

// My name is Amadi Chile. My Favourite Color is  purple and I come from Chile.

/* 
  "My name is"
  fullName
  "."
  " My Favourite Color is  "
  favouriteColor
  " and I come from "
  country

*/

console.log(
  "My name is " +
  fullName +
  "." +
  " My Favourite Color is  " +
  favouriteColor +
  " and I come from " +
  country
);

// template string uses backtick or ``

/* 
  how to use backtick to dynamically inject a varible into a string

  ${variableName}
*/

console.log(`My name is ${fullName}. My Favourite Color is ${favouriteColor} and I come from ${country}. `);

console.log(str2.includes('a'))
console.log(str2.indexOf('a'))

//? arrays

/* let arrayName = [item1,item2]; */

let Ages = [33,44,77,969,'Apple',null,false];

console.log(Ages);
console.log(Ages[4])
console.log(Ages[1])
console.log(Ages.length)

// some array methods

Ages.pop(); // removes the last item
Ages.push(1000); // adds an item from behind
Ages.shift(); // removes the first item
Ages.unshift(1914); // adds an item ffrom the start


console.log(Ages.includes(969))
console.log(Ages.indexOf(969))

// splice

/* 
  arrayName.splice(validIndex,type,items);

  validIndex: is a number less than the array length
  type 0: add to the array with length expansion
  type 1: add to the array without length expansion
  items: values to be added
*/

console.log(Ages.splice(1,1,144)); // replaces 44 with 144
console.log(Ages.splice(2,1,)); // deletes 77 
console.log(Ages.splice(2,0,2024,'Banana',null)); // add 2024 to index 2 
console.log(Ages);


// ? object

/* let objectName = {
  key: value,
  key: value,
} 
*/

let User = {
  firstName: 'Chile',
  lastName: 'Amadi',
  email: 'amadichile@gmail.com',
  'user name': 'chilemati'
}

// ObjecName.key
// ObjectName['key'];

let objecKey = 'email';

console.log(User.firstName)
console.log(User['lastName']);
console.log(User["user name"])
console.log(User[objecKey])

// adding new items to an object

/* 
  ObjectName.key = value;
*/

// User.gender = 'Male';
// User.age = 969;

Object.assign(User,{gender: 'Male',age: 969,Country: 'Chile'});

delete User.email;

console.log(User)





