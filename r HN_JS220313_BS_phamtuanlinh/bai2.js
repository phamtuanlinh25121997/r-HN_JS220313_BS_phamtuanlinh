let str ="heLLo riKKei acADemy";
function newSentence(sentence) {
    while (sentence[0] === ' ') {
      sentence = sentence.slice(1);
    }
    while (sentence[sentence.length - 1] === ' ') {
      sentence = sentence.slice(0, sentence.length - 1);
    }
}
let array = str.split(" ");
for(let i=0;i<array.length;i++){
    let firstLetter = array[i].charAt(0).toUpperCase();
    let restOfWord = array[i].slice(1).toLowerCase();
    array[i] = firstLetter + restOfWord;
}
let newStr = array.join(" ");
console.log(newStr);