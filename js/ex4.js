var attempt=0
let a = prompt("Enter the password:")
while(attempt<3){
    if(a!='secret')
    {
        console.log(`Try Again!!`);
        a = prompt("Enter the password:")
    }
    else{
        console.log(`You entered the correct password after ${attempt} attempt`);
        break;
    }
    attempt++;
}
    if(attempt==3)
{
    console.log(`Your account is locked! You failed to enter the correct password ${attempt} times`);
}
