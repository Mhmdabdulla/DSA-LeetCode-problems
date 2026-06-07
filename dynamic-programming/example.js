//Dynamic Programming
// making solution better,  

//finding fibnacci serires in diff ways
const { performance } = require('perf_hooks');

function fibRec(n){
    if(n==0) return 0;
    if(n==1) return 1;

    return fibRec(n-1)+fibRec(n-2)
}

function fibRecMap(n){
    let map = new Map([[0,0],[1,1]]);
    
    function rec(n){
        if(map.has(n)) return map.get(n)

        map.set(n,rec(n-1)+rec(n-2))
        return map.get(n)
    }
    return rec(n)
}

function fibLoop(n){
    if(n==0) return 0;
    if(n==1) return 1;

    let a=0n,b=1n,c;
    for(let i=0;i<n-1;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return c;
}



const start = performance.now();
console.log(fibRec(500))
// console.log(fibRecMap(500))
// console.log(fibLoop(500))

const end = performance.now();

console.log(`Execution time: ${end - start} ms`);






//dp[i][w] = maximum value using first i items with bag capacity w
//“If I only look at the first i items, what’s the best value I can get with w space?”

// At every step, you ask:

// “Should I take this item or not?”

// You:

// Take it → add its value + best solution of remaining capacity

// Leave it → reuse previous best solution

// And DP ensures:

// You never recompute

// You always build on smaller solved problems

// function knapsack(weights,values,capacity){
//     const n = weights.length;
//     const dp = Array.from({length:n+1},()=>Array(capacity+1).fill(0));
//     console.log('First dp status');
//     console.table(dp);
//     console.log('--------------------------')

//     for(let i=1;i<=n;i++){
//         for(let w=0;w<=capacity;w++){
//             if(weights[i-1] <=w){
//                 dp[i][w] = Math.max(values[i-1]+dp[i-1][w-weights[i-1]], dp[i-1][w]);
//             }else{
//                 dp[i][w] = dp[i-1][w]
//             }
//             console.log('after update by:',i,w)
//             console.table(dp);
//             console.log('------------------------')
//         }

        
//     }
//     return dp[n][capacity]
// }

// const weights = [1,2,3]
// const values = [40,15,10]
// const capacity = 5;

// console.log(knapsack(weights,values,capacity))