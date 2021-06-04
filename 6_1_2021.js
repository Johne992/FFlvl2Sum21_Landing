//Reminder that PythonTutor doesn't open windows like alert and prompt so this has to be done on codepen or replit
//https://codepen.io/Jawn92/pen/yLMvBoX?editors=0010
let w = myFunction(2,2);

//usual function declaration (up to now)
//this is more versatile and can be used again and again as it is loaded immediately after the file is loaded
function myFunction(a,b){
return a * b;
}

let y = myFunction(1,2);

w = z(1,2);
//function expression
//this is useful but less versatile, it is loaded when the variable is made
let x = function(a,b){return a * b};
let z = (a,b) => a * b; //arrow function with multiple parameters

y = x(1,2);

//Callback functions are functions that are passed into another fuction
// as an argument
function greeting(name){
  alert("Hello "+name);
}

function processUserInput(callback){
  var name = prompt("Enter your name:");
  callback(name);
}

processUserInput(greeting);

// function processUserInput2(){
//   var name = prompt("Enter your name:");
//   alert("Hello "+name);
// }
// processUserInput2();

//Arrow Functions
function arrow1(a){
  return a+ 100;
}

let arrow1actual = a => a + 100;

let b = arrow1(1);
let c = arrow1actual(1);

//0 Argument arrow functions
let a = 4;
let b = 2;
function arrow2(){
  return a+b;
}

