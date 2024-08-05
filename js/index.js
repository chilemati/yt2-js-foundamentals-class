function oldCode() {
  var a= 1;

console.log(a)

let b = 2;

console.log(b)

const c = 3;
console.log(c);

// var does not respect variable scope

var a = '33';

console.log(a)

// let and const respect variable scope

b = 44; //updating

console.log(b)

{
    let b = 22; // is a local varialbe
    console.log(b)
}

/* 
  variable struture

  let b = 2; // declearing the variable and initializing it
  let is keyword
  b is variable name
  = is an assignment operator
  2 is the value of type number

  let c; // is an unitialized variable
  c= 33;

*/

//  c = 55; /// cant be updated

 console.log(c)

//  
/*  */

//! arithmatic operators

/* 

+ plus
- minus
* multiplication
/ division 2/2 = 1 r 0
% modulus 2%2 = 0 1 r 0; 3%2 = 1 1r1; 5%3 = 2 1 r 2
** power 2**3 = 2x2x2 = 8
-- decreament by 1
++ increament by 1

*/
let e=7;
let f = 6;

console.log(e + f); // 13
console.log(e - f);// 1
console.log(e / f); 1.
console.log(e * f); //42
console.log(e ** f); 
console.log(e % f)// 1
console.log(++e)// 8
console.log(--e)// 1

//! comparision operators

/* 
 == equal to
 === strictly equal to
 && logical and
 || logical or
 ! logical not
 > greater than
 < less than
 <= less than or equla to
 >= greater than or equal to
 != not equal to
 !== strictly not  equal to
 

 && is like multiplication
 true=1; false= 0;

 condition1 contition2  result action
   1            0         0     false
   0            1         0     false
   0            0         0     false
   1            1         0     true


 || is like addition
 true=1; false= 0;

 condition1 contition2  result action
   1            0         1     true
   0            1         1     true
   0            0         0     false
   1            1         0     true

   let isMale = true;
   !isMale = false

*/

let g = 7;
console.log(g >= 8); //false
console.log(g <= 8); //true
console.log(g !== 8); //true
console.log(g != 8); //true
console.log(g > 8); // false
console.log(g < 8); // true
console.log(g == 8); // false
console.log(8 === 8); // true
console.log(8 === '8'); // false
console.log(8 == '8'); // true
console.log(g > 8 && g < 10); // false
console.log(!(g > 8) && g < 10); // true
console.log(g > 8 || g < 10); // true

// compound operator

/* 
  += equalent to a+=b; a = a+b
  -= equalent to a-=b; a = a-b
/  *= equalent to a*=b; a = a*b
/  %= equalent to a%=b; a = a%b
/  /= equalent to a/=b; a = a/b

*/

let t = 9;

console.log(t+=1); // 10
console.log(t-=1); // 9
console.log(t/=1); // 9
console.log(t %=2); // 1
console.log(t *=2); // 2

//! other operators

/* 
  = is assignment operator
*/

// ? boolean data type

let isUser = true;
let isMarried = false;

console.log(isUser, typeof isUser)

//? null data type

let blogs = null;

blogs = [];

console.log(blogs, typeof blogs)

//? undefinded

let age;
age = 99;
console.log(age, typeof age)

//? number data type

let price = 100;
let d = -1;
let r = 2.0046;
console.log(price,d,r, typeof price);

//? type conversion

let age1 = '55';
age1= Number(age1);
console.log(age1, typeof age1);

// some in build number methods

let random = Math.random();

console.log(random)
console.log(Math.PI)
console.log(Math.round(2.4)) //2
console.log(Math.round(2.6))//3
console.log(Math.ceil(2.4)) //3
console.log(Math.ceil(2.6)) //3
console.log(Math.floor(2.4)) //2
console.log(Math.floor(2.6)) //2
console.log(Math.pow(2,3))
console.log(Math.pow(4,5))
console.log(Math.max(2,3,4,7,55))
console.log(Math.min(2,3,4,7,55));

//? strings

let fullName = 'Amadi Chile';

console.log(fullName, typeof fullName)

/* 
   index  012345678910
   string Amadi Chile
   length 1234567891011
*/

console.log(fullName.length)
// stringVariableName[validIndex]
console.log(fullName[6]);
// fullName= fullName.replace('A','U')
console.log(fullName.replace('Amadi','Joy'))
console.log(fullName.replace('Amadi',''));
console.log(fullName.split(" ")[1]);

let str1 = 'Amadi';
let str2 = 'Chile';

console.log(str1 + ' '+ str2);
console.log(str1.concat(' ').concat(str2));

// get the initials from a users firstname and lastname

let firstname = 'John';
let lastname = 'Doe';

let initials = firstname[0]+ lastname[0];
console.log(initials)
/* 
  injecting variable with template literals

  ${variableName}
*/
let str3 = `${str1} ${str2}`;
console.log(str3);

console.log(firstname.includes('J'))
console.log(firstname.indexOf('J'))
console.log(firstname.toLocaleLowerCase())

//? array

/* let arrayName = [item1,item2]; */

let Ages = [77,33,44,99,88,'66',true,[3,4]];

console.log(Ages)
console.log(Ages[2])
console.log(Ages.length);

// push

Ages.push(13); // adds from the end
Ages.pop(); // removes from the end
Ages.shift(); // removes from the start
Ages.unshift(77); // adds from the start

/* 
  how use splice
  ArrayName.splice(validIndex,type,values);
   
  validIndex: in a number within the array length
  type 0: insert into the array with length expansion
  type 1: insert into the array without length expansion
*/

Ages.splice(2,1,); // remove 44
Ages.splice(1,1,133); // indsert 133 at index 1
Ages.splice(2,0,45,70,11); // insert 45 at index 2

console.log(Ages);

//? object

/* 
  let objectName = {
    key: value,
    key: value
  }
*/

let User = {
  firstName: 'Amadi',
  lastName: 'Chile',
  isLoggedIn: false,
  'user name': 'chilemati'
}

console.log(User, typeof User);

let objectKey = 'lastName';

console.log(User.firstName)
console.log(User['firstName']);
console.log(User["user name"])
console.log(User[objectKey])

// User.age = 88;
// User.gender = 'Male';

Object.assign(User,{age: 88,gender: 'Male', email: 'amadichile@gmailc.om'})

delete User.isLoggedIn;
}

//? Functions

/* 
  to ways of greating a function
  > function keyword
  > arrow function

  function functionName (parameter1,parameter2) {
    code block;
  }
  
  const functionName = (parameter1,parameter2)=> {
     code block;
    }

*/

function greetUser (name,title) {
  console.log(`Good Morning ${title}. ${name}!`);
}

const greetUser2 = (obj)=> {
  console.log(`Good Morning ${obj.title}. ${obj.name} Again!`);
}

// calling or invoking a function

/* 
  funcitionName(arguments)
*/

greetUser('Chile','Mr');
greetUser('Chalie','Miss');
greetUser('Mrs','Mary');
greetUser2({name: 'Chile',title:'Mr'});
greetUser2({title: 'Miss',name:'Moses'});

// dynamic functions

function sumAnyTwo(a,b) {
  console.log(a+b)
}

sumAnyTwo(2,5); // 7
sumAnyTwo(12,5); // 17
sumAnyTwo(12,15,3); // 27

// returning values from a function

const timesTwo = (a,b)=> {
  let result = a*b;
  return result;
  // console.log('after return')
}

console.log(timesTwo(9,11)); // 99

console.log(timesTwo(55,8) + 3);

// hoisting
// console.log(yy);
// let yy = 11;
// console.log(subtractTwo(99,33));
// let subtractTwo = (a,b)=> {
  //   return a-b;
  // }
  
  console.log(subtractTwo(99,33));

  function subtractTwo(a,b){
    return a-b;
  }

  // method and function

  /* 
    method: just a function inside a class or an object
  */

    let UserMe = {
      firstName: 'Chile',
      lastName: 'Amadi',
      initials: function() {
        return `${this.firstName[0]}${this.lastName[0]}`
      },
      fullName: ()=> {
        return `${UserMe.firstName} ${UserMe.lastName}`
      }
    }

    console.log(UserMe.initials())
    console.log(UserMe.fullName())

    //? condtional staments

    // if

    /* 
      if(condition) {
        code block
      }
    */

   let age = 2;

   if(age >= 17) {
    console.log('Can Drink Alchohol');
   }

  //  if else

  if(age >= 18) {
    console.log('Can Drive');
  }else{
    console.log('Against the law to drive');
  }

  // if else if else

  if(age >= 18) {
    console.log('Can drink Alchohol')
  }else if((age > 15) && (age <= 17)) { // range 15-17
    console.log('Can Drink Alchohol in Parent Presence');
  } else if((age > 10) && (age <= 14)) {
    console.log('Can drink Hollandial Milk');
  }else{
    console.log('Can drink Water Only!')
  }

  // switch
  // let key = prompt('Please enter a number from 1-5: ');
  //  key = Number(key);
  // console.log(key ,typeof key);

  // switch (key) {
  //   case 2:
  //     console.log(`${key} is an even Number`);
  //     break;
  //   case 3:
  //     console.log(`${key} is an odd Number`);
  //     break;
  //   case 5:
  //     console.log(`${key} is a special Number`);
  //     break;
  //   case 6:
  //   case 7:
  //   case 8:
  //   case 9:
  //     console.log(`${key} is is less than 10`);
  //     break;
  
  //   default:
  //     console.log('No number meaning')
  //     console.log('No number meaning!')
  //     break;
  // }

  // tenary operator

  /* 
   condition ? true: false;
  */

 let isGoal = true;

 isGoal? console.log('increment'): console.log('decrement or no action');

 age < 7? console.log('child'): console.log('Adult');

//  condition rendering

// &&

/* 
  condtion && action


*/

!isGoal && console.log('Goal scored!!!!!')

//? loops

console.log(1)
console.log(2)
console.log(3)
console.log(4)

/* 
  for loop

  for(startPoint; condition; increment) {
  code block
  
  }

*/

/* 
  generate a nuber from 1-4

  startPoint: 1;
  endPOint: 4;
  condition: startPoint <= endPoint
  incremant: startPoint++
*/

for(let i=1; i<=4; i++) {
  console.log(i)
}

// output a nuber form 15 to 10;

/* 
  startPoint: 15;
  endPoint: 10;
  condtion: startPoint >= endPoint;
  increment: startPoint--
*/

for(let i = 15; i >= 10; i--) {
  // alert(i)
  console.log(i)
}

// while loop

/* 
  startPoint;

  while(condition) {
  code block;
   increment;
  }
*/

// output a number form 20 - 25

/* 
  startPoint: 20;
  endPint: 25;
  condition: startPoint <= endPoint;
  increment: startPoint++
*/

let j = 26;
console.log(j <= 25)
while(j <= 25) {
  console.log(j);
  j++;
}

// do while loo]


/* 
  startPoint;
  do{
   code block;
   increment;
  }while(condition)
*/

// output numbers from 22 - 17;

/* 
  startPoint: 22;
  endPoint: 17;
  condition: startPoint > endPoint;
  increment: startPOint--
*/

let u = 15;

do {
  console.log(u);
  u--;
}while(u >= 17);

let fruits = ['watermelon','Apple','Banana','Orange'];

// console.log(fruits[1]

// using loops to readt the items in array

for(let i=0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// for of

for(item of fruits) {
  console.log(item)
}

for (key in UserMe) {
  // console.log(key)
  console.log(UserMe[key])
}

// higher array methods

let prices = [12,5.7,88,345,72];

/* 
  arrayName.type(items=> {
     code block;
    })
*/

prices.forEach(each=> {
  console.log(each)
})

let byTwo = prices.map(each=> {
  return each*2;
})

console.log(byTwo,prices);

let greaterThan50 = prices.filter(each=> each >= 50);

console.log(greaterThan50);

console.log(fruits);

// sort

console.log(fruits.sort());
console.log(prices.sort());
console.log(prices.sort((a,b)=> a -b));
console.log(prices.sort((a,b)=> b -a));

console.log(prices.reduce((a,b)=> a*=b))

//? algorithm

/* 
problem: 
   develope a psuedocode algorithm that gets the even a odd number from 1 to a given number

  1. even number divide by two without a reminder while odd has a reminder
  2.
    > get the number
    > generate numbers within the given number
    > filter out odd and even
    > store the even and old seperately
    > return even and odd number
  3.
  > function
  > loops 
  > modulus and if stament
  > array
  > retrun arrays
  4.
  convert to script


*/


function evenOdd (a) {
  let even = [];
  let odd = [];

  for(let i=1; i<= a; i++) {
    if(i%2 === 0) {
      // even 
      even.push(i);
    }else{
      // odd
      odd.push(i);
    }
  }

  // return [even,odd];
  return {even,odd};
}

// destructuring
// let [odd,even]= evenOdd(10);
let {odd,even}= evenOdd(1000);

console.log(even)
console.log(odd)

let enteredAge = prompt('Please enter your Age: ');

let confirmAge = confirm(`Are your ${enteredAge} is your real Age?`);

console.log(confirmAge)

confirmAge?alert('Age Accepted!'): alert('Age rejected');









