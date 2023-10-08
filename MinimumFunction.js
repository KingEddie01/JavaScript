function minimum(a,b){
    if (a > b){
        return b
    }
    else if (a < b){
        return a;
    } 
    else{
        console.log("Numbers are same");
    } 
}
console.log(minimum(5,10))