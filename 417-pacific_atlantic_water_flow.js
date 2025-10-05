// 1. Initialize two sets: p_seen and a_seen to track cells reachable from the Pacific and Atlantic oceans respectively.
// 2. Use two queues to perform BFS from the Pacific (top and left edges) and Atlantic (bottom and right edges).
// 3. In each BFS, for every cell dequeued, check its neighbors. If a neighbor is in bounds, hasn’t been visited, and has a height greater than or equal to the current cell, add it to the queue and mark it as reachable.
// 4. Once both traversals are done, take the intersection of p_seen and a_seen to find all cells that can reach both oceans.

var pacificAtlantic = function(heights) {
    let res = [];

    if(!heights || heights.length <=0 || heights[0].length <=0) return res;

    let m = heights.length;
    let n = heights[0].length;

    let pacific = Array.from({length:m},()=>Array(n).fill(false));
    let atlantic = Array.from({length:m},()=>Array(n).fill(false));

    let pacQueue = [];
    let atlQueue = [];

    // for left and right edges
    for(let i=0;i<m;i++){
        pacQueue.push([i,0]);
        pacific[i][0] = true;
        atlQueue.push([i,n-1]);
        atlantic[i][n-1] = true;
    }

    // for top and bottom
    for(let j=0;j<n;j++){
        pacQueue.push([0,j]);
        pacific[0][j] = true;
        atlQueue.push([m-1,j]);
        atlantic[m-1][j] = true;
    }

    bfs(pacQueue,pacific,heights);
    bfs(atlQueue,atlantic,heights);

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(pacific[i][j] && atlantic[i][j]){
                res.push([i,j])
            }
        }
    }

    return res;

    function bfs(queue,ocean,heights){
        const dir = [[0,1],[1,0],[0,-1],[-1,0]];

        while(queue.length>0){
            let [r,c] = queue.shift();

            for(let [dr,dc] of dir){
                let newR = r+dr;
                let newC = c+dc;

                if(newR>=0 && newR<m && newC>=0 && newC<n && !ocean[newR][newC] && heights[newR][newC] >= heights[r][c]){
                    ocean[newR][newC] = true;
                    queue.push([newR,newC])
                }
            }
        }
    }

    
};

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))
console.log(pacificAtlantic([[1]]))