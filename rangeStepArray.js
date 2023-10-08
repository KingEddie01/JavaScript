function stepRange(a,b,c){
    let array = [];
    if (a >= b && c < 0){
        while (a >= b){
            array.push(a);
            a += c
            }
        return array;
    }
    else{
        while (a < b && c > 0){
            array.push(a);
            a += c
            }
        return array;
    }
}
console.log(stepRange(1,10,2))

