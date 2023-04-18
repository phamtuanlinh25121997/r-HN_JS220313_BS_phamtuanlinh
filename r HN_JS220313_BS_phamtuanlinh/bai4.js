// cách 1: không dùng hàm sort
// let array = [1,3,5,7,9,2,4,6,8];
// for(let i=0;i<array.length;i++){
//     for(let j = i+1;j<array.length;j++)
//     if(array[i]<array[j]){
//         let box = array[i];
//         array[i]=array[j];
//         array[j] = box;
//     }
// }
// console.log(array);


// cách 2: dùng hàm sort
let array = [1,3,5,7,9,2,4,6,8];
array.sort((a,b)=>b-a)
console.log(array);
