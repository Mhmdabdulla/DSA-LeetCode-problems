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

function knapsack(weights,values,capacity){
    const n = weights.length;
    const dp = Array.from({length:n+1},()=>Array(capacity+1).fill(0));
    console.log('First dp status');
    console.table(dp);
    console.log('--------------------------')

    for(let i=1;i<=n;i++){
        for(let w=0;w<=capacity;w++){
            if(weights[i-1] <=w){
                dp[i][w] = Math.max(values[i-1]+dp[i-1][w-weights[i-1]], dp[i-1][w]);
            }else{
                dp[i][w] = dp[i-1][w]
            }
            console.log('after update by:',i,w)
            console.table(dp);
            console.log('------------------------')
        }

        
    }
    return dp[n][capacity]
}

const weights = [1,2,3]
const values = [40,15,10]
const capacity = 5;

console.log(knapsack(weights,values,capacity))