//remove all occurrences of a specific value from an array without using built-in methods

let ar = [1,2,3,4,5,6,7,8,9]

let valToRemove = 5;

for(let i=0;i<ar.length;i++){
    if(ar[i] === valToRemove){
        for(let j=i;j<ar.length-1;j++){
            ar[j] = ar[j+1]
        }
        ar.length = ar.length -1;
        i--;
    }
}

console.log(ar) //[1,2,3,4,6,7,8,9]