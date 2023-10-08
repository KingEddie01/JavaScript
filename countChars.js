function countBs(word,letter){
    let num = 0;
    for (let count = 0; count <= word.length;count++){
        if (word[count] == letter)
            num++;
     }
    return "There are" +" "+ num +" "+ letter+"('s) in the word";
}
console.log(countBs("Bless",'of'));