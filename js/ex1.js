// Input
let Name = prompt("Please enter your name");
let units= prompt("Enter the no. of units completed in college");

while (units<0){
    units=prompt('Invalid units! Please enter the valid units!:');
}
if(units>=0 && units<=30){
    console.log(`Hello ${Name}\nYour grade standing is Freshman`);
}
if(units>=31 && units<=60){
    console.log(`Hello ${Name}\nYour grade standing is Sophomore`);
}
if(units>=61 && units<=90){
    console.log(`Hello ${Name}\nYour grade standing is Junior`);
}
if(units>=91){
    console.log(`Hello ${Name}\nYour grade standing is Senior`);
}