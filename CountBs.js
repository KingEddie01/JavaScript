function countBs(word){
    let num = 0;
    for (let count = 0; count <= word.length;count++){
        if (word[count] == "B")
            num++;
     }
    return "There are" +" "+ num +" "+ "B('s) in the word";
}
console.log(countBs("Bless"));