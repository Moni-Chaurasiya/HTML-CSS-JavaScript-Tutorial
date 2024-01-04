console.log("this is tutorial");

/* function greet(name){
    console.log(name+ "is a good girl");
}

let name ="Moni";
let name1 = "Soni";
let name2 ="Amrita";
greet(name);
greet(name1);
greet(name2);  */

function greet(name, greetText="Greeting from JavaScript"){  // Default value of greetText
    let name1 = "Name1";          //Local Variables
    console.log(greetText + "  " + name);
    console.log(name + "is a good girl"); 
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This line will neaver execute (unreachable code)
    // console.log("Function is returnd")
}

let name ="Moni";
let name1 = "Soni";
let name2 ="Amrita";
let greetText = "Good Morning";
greet(name ,greetText);
greet(name1);
greet(name2,greetText);
//let returnVal = greet(name2);
//console.log(returnVal);

let returnVal = sum(1,2,4);
console.log(returnVal);

 function sum(a,b){
   // console.log(a+b);
    return a+b;
 }
result=sum(5,8);
console.log("The sum of number is" +result);