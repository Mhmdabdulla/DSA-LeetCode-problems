//Longest increasing subsequent(LIS);

//Given an array and find longest increasing subsequent

const a = [3,1,4,4,2,2,5,1,6,6,3,7,7,2]

let dp = new Array(a.length).fill(1)

for(let i=0;i<dp.length;i++){
    for(let j=0;j<i;j++){
        if(a[j] <= a[i]){
            dp[i] = Math.max(dp[i],dp[j]+1)
        }
    }
}

console.log(dp) //[1, 1, 2, 3, 2, 3,4, 2, 5, 6, 4, 7,8, 4]