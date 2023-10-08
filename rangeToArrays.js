function rangeToArray(a,b){
    let array = [];
    if (a > b){
        console.log("Starter must be lower than end")
}
for (let count  = a; count <= b ; count++){
    array.push(count);
}
return array;
}
console.log(rangeToArray(1,10));