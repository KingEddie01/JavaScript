function reverseArray(array = []){
    let newArray = [];
    
    for (let count = array.length-1; count >= 0 ;count--){
        newArray.push(array[count])
    }
    return newArray;
}
let array = [1,2,3,4,5,6,7,8,9];
console.log(reverseArray(array))






