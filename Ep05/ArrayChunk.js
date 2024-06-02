// Implement a function that make a chunk using array , array and chunk are given in input


let arr = [1,2,3,4,5,1,3,3,4,11,45,43,23,21,1,23,123,43,5]
const makeChunk=(arr,chunk)=>{
let result = [];
let minArray = []
    for(let i=0; i<arr.length; i++){
        minArray.push(arr[i])
        if(minArray.length  == chunk ||  i === arr.length -1){
            result.push([...minArray])
            minArray.length = 0
        }
    }
    return result;
}
console.log(makeChunk(arr,3))