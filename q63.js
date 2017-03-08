/**
 * 63.Unique Paths II
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var dp = new Array(m);
    for(var i = 0; i < m; i++){
    	dp[i] = new Array(n);
    	for(var j = 0; j < n; j++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0;
            }else if(i === 0 && j === 0){
    			dp[i][j] = 1;
    		}else if(i === 0){
                dp[i][j] = dp[i][j-1];
            }else if(j === 0){
    			dp[i][j] = dp[i-1][j];			
    		}else{
                dp[i][j] = dp[i][j-1] + dp[i-1][j]; 
            }
    	}
    }
    return m > 0 && n > 0 ? dp[m-1][n-1] : 0;
};