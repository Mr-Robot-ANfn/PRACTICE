// ASSIGNMENT 9

// QUESTION 1
let name=prompt("Enter your city")
if(name=="karachi"){
   document.write("Welcome to city of lights");    
}


// QUESTION 2
let gender=prompt("Enter your gender")
if(name=="male"){
   document.write("Good Morning Sir!");    
}
else{
    document.write("Good Morning Ma'am!");    
}


// QUESTION 3
let color=prompt("Enter color of road traffic signal")
if(color=="red"){
   document.write("Must Stop");    
}
else if (color=="yellow"){
    document.write("Ready to move");    
}
else{
    document.write("Move now");    
}


// QUESTION 4
let fuel=+prompt("Enter fuel in litres")
if(fuel<0.25){
   document.write("Please refill the fuel in your car");    
}


// QUESTION 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// WILL RUN 


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// WILL NOT RUN


var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");// WILL NOT RUN

}
if (c === 13) {
    alert("condition 2 is true"); // WILL RUN
}
if (++c < 14) {
    alert("condition 3 is true");// WILL NOT RUN

}
if (c === 14) {
    alert("condition 4 is true"); // WILL RUN
}



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); // WILL RUN
}


if (true) {
    alert("True"); // WILL RUN
}
if (false) {
    alert("False"); // WILL NOT RUN
}


if ("car" < "cat") {
    alert("car is smaller than cat");// WILL RUN
}



// QUESTION 6
let s1=+prompt("Enter marks in subject 1");
let s2=+prompt("Enter marks in subject 2");
let s3=+prompt("Enter marks in subject 3");
let s4=+prompt("Enter the total marks")
let per=(s1+s2+s3)/s4*100;
if(per>=80){
    document.write("Total Marks: "+s4+"<br>")
    document.write("Marks Obtained: "+(s1+s2+s3)+"<br>")
    document.write("Grade is: A-one"+"<br>")
    document.write("Percentage is: "+per+"<br>")
    document.write("Remarks: Excellent"+"<br>")

}
else if (per>=70) {
    document.write("Total Marks: "+s4+"<br>")
    document.write("Marks Obtained: "+(s1+s2+s3)+"<br>")
    document.write("Grade is: A"+"<br>")
    document.write("Percentage is: "+per+"<br>")
    document.write("Remarks: Good"+"<br>")
}
else if (per>=60) {
    document.write("Total Marks: "+s4+"<br>")
    document.write("Marks Obtained: "+(s1+s2+s3)+"<br>")
    document.write("Grade is: B"+"<br>")
    document.write("Percentage is: "+per+"<br>")
    document.write("You need to impprove"+"<br>")
}
else{
    document.write("Total Marks: "+s4+"<br>")
    document.write("Marks Obtained: "+(s1+s2+s3)+"<br>")
    document.write("Fail"+"<br>")
    document.write("Percentage is: "+per+"<br>")
    document.write("Sorry"+"<br>")
}


// QUESTION 7
let rn=Math.random();
let ans=+prompt("guess the secret number.");
if(ans==rn){
    document.write("Bingo! Correct answer.")
}
if(ans+1>rn) {
    document.write("Close enough to the correct answer.")

}


// QUESTION 8
let num=+prompt("enter Number")
if(num%3==0){
    document.write("Number is divisible by 3")
}


// QUESTION 9
let num=+prompt("enter Number")
if(num%2!=0){
    document.write("Odd number")
}
else{
    document.write("Even number")
}


// QUESTION 10
// let T=+prompt("Enter temperature")
if(T>40){
    document.write("It is too hot outside")
}

else if(T>30){
    document.write("the weather today is normal")
}
else if(T>20){
    document.write("Today's weather is cool")
}
else if(T>10){
    document.write("OMG! today's weather is so cool")
}


// QUESTION 11
let fn=+prompt("Enter First Number");
let sn=+prompt("Enter Second Number");
let op=prompt("Enter Operator");
if(op=="+"){
    document.write(fn+sn);
}
else if(op=="*"){
    document.write(fn*sn);
} 
else if(op=="/"){
    document.write(fn/sn);
} 
else if(op=="-"){
    document.write(fn-sn);
} 
else if(op=="%"){
    document.write(fn%sn);
} 

