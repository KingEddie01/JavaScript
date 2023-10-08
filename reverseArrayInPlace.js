function reverseArrayInPlace(array1) {
    let a = 0;
    let b = array1.length - 1;
    while (a < b) {
        let temp = array[a];
        array1[a] = array1[b];
        array1[b] = temp;
        a++;
        b--;
    }
  }
let array =[1,2,3,4,5,6,7,8,9];
reverseArrayInPlace(array);
console.log(array);