function sumArrayElement(number){
    let sum = 0;
    let numberArray = [];
    for (let count = 0; count < number; count++){
        numberArray[count] = count + 1;
        sum += numberArray[count];
    }
    console.log(numberArray);
    return  "total sum of Element is "+" "+sum;
}
console.log(sumArrayElement(10));