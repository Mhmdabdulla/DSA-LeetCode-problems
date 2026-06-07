//3 methods
//bfs, dfs+hash map, from top to bottom calculation

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a=1,b=1,c;
    for(let i=0;i<n-1;i++){
        c = a+b;
        a=b;
        b=c;
    }
    return b;
};