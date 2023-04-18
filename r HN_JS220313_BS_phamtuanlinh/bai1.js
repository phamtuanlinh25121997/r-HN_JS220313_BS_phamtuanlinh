let array = [1,3,5,7,9,2,4,6,8];
for(let i=0;i<array.length;i++){
    for(let j = i+1;j<array.length;j++)
    if(array[i]>array[j]){
        let box = array[i];
        array[i]=array[j];
        array[j] = box;
    }
}
let largestNumber = array[array.length-1];
console.log(largestNumber);