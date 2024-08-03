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



