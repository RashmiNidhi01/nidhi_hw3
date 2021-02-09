// Input
const abc = prompt("Enter the day of the week:");
switch (abc){
    case 'sun':
        console.log(`You entered: ${abc}\nThe following day is:Monday`);
      break;
    case 'mon':
        console.log(`You entered: ${abc}\nThe following day is:Tuesday`);
      break;
    case 'tue':
        console.log(`You entered: ${abc}\nThe following day is:Wednesday`);
      break;
    case 'wed':
        console.log(`You entered: ${abc}\nThe following day is:Thursday`);
      break;
    case 'thu':
        console.log(`You entered: ${abc}\nThe following day is:Friday`);
      break;
    case 'fri':
        console.log(`You entered: ${abc}\nThe following day is: Saturday`);
      break;
    case 'sat':
        console.log(`You entered: ${abc}\nThe following day is:Sunday`);
    break;
    default:
console.log("Not a valid day!!Try again!!");
}
