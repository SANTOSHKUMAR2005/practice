
 //work 1
// const product = {
//  name : "pen",
//  raiting : 4,
//  price : 5,
//  offer : "20%",
//  isdeel:" yes",
// };
// console.log(product);
//  a=5;
// b=10;
// console.log("a= ",a);
// console.log("b= ",b);
// console.log("a+b =",a+b);

//work 2
//  alert("wellcome in my world");
/*username=prompt("plese enter your name");
alert(`${username}, s.k. wellcome you in their world`);
console.log(`${username}, s.k. wellcome you in their world`);*/



/* //work 3
number=prompt("enter a number");
if (number%5 === 0) {
    console.log(number,"is a multipal of 5");
    alert("number is a multipal of 5");
}
else{
    console.log(number,"is not a multipal of 5");
    alert("number is not a multipal of 5");
}*/



// work 4
//  name=prompt("enter your name");
//  L = name.length;
//  username = `@${name}${L}`;
//  console.log(username);


// //work 5
// let marks=[85,97,44,27,76,60];
// let t=0;
// for (var index = 0; index < marks.length; index++) {
//     t = t + marks[index];
//     console.log(marks[index]);
// }
// console.log(t/index);
// let s=0;
// for(let p of marks ){
//     s=s+p;
//     console.log(p);
// }
// console.log(s/index);

//work 6
// let price=[200,250, 300,350,400,450 ];

//  for(let i=0;i<price.length; i++ ){
// price[i]=price[i]-( price[i]/10);
//  }
// console.log(price);

/*
//defining function
let a=prompt("enter first number");
let b=prompt("enter second number");
a=Number(a);
b=Number(b);
function add(x,y){
let z = x+y;
return(`the sum of given velues is ${z}`);
}
let c= add(a,b);
console.log(c);
  substract =(x) =>{
    console.log("welcome");
return(x);
  }*/
  
/*
  // foreach function
 let  arr = [3, 5 ,4, 7, 8, 9];
 arr.forEach(function mul(x){
    var y = x ;
console.log(y);
    // console.log(z);
   
 });



 const ratings = [5, 4, 5];
let sum = 10;

const sumFunction = (a, b) => a + b;

ratings.forEach( (rating) => {
  sum =  sumFunction(sum, rating);
  
});
console.log(sum);
*/

// Naively expected output: 14
// Actual output: 0
 


/*
//filter in Array
 let arr = [1 ,2 ,4 ,5, 6, 7];
 let newarr = arr.filter((x)=>{
    if(x%2===0){
        
        return x;
    }
    
 });
 console.log(newarr);    */
 
 /*
// reduce
array = [1,2,3,4,56,7,8,9];
let largervalue = array.reduce((x,y)=>{
    return (x>y?x:y);
})
console.log(largervalue); */

/*let x = prompt("enter a number");
let arr =[];
let f = 1;
for(let i = 1;i<=x;i++){
  arr[i-1] = i;
  f = f*i;

}
 console.log(arr);
 console.log(`the factorial of ${x} = ${f}`);*/
 

/*let newname = document.getElementsByClassName("items");
  console.log(newname);
  console.log(newname[0]);
  document.getElementsByClassName("items")[0].innerText = "santosh";*/
 
 
   // adding new tag using js
//  let cr = document.createElement("button")
//  cr.innerText = "click me";
//  cr.style.backgroundColor="red";
//  cr.style.color= "white";
// document.querySelector("body").prepend(cr);
 
/*
// seting the attribuits
// let h =document.querySelectorAll("h1");
// document.querySelectorAll("h1") selects all <h1> elements on the page. This returns a NodeList, not a single element.
// You need to iterate through each <h1> element in the NodeList and add the class to each one individually.
// h.forEach(function(x){
//   x.classList.add("back");
// x.style.border="2px dotted red";
// }
// ); */

/*
// PROPERTISE OF MATH OBJECT
let a=Math.floor(2.5);
console.log(a);
console.log(Math.max(4,23,7, 6,3,4,15 ,15498 , 5));
console.log(Math.min(4,23,7, 6,3,4,15 ,15498 , 5));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.SQRT1_2);
console.log(Math.sqrt(25));
console.log(Math.pow(2,5));
*/


// propartys of  DATE OBJECT 
let birthdate=new Date(2005,2,10);

console.log(birthdate.getDay);




