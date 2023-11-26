let inputNumber = 3;
let result = checkOddOrEven(inputNumber);
console.log(result);

function checkOddOrEven(inputNumber){
    let res = inputNumber%2;
    if (res === 0){
        return "Number is even";
    } else {
        return "Number is odd";
    }
}