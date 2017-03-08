/**
 * 62.Unique Paths
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = new Array(m);
    for(var i = 0; i < m; i++){
    	dp[i] = new Array(n);
    	for(var j = 0; j < n; j++){
    		if(i === 0 || j === 0){
    			dp[i][j] = 1;
    		}else{
    			dp[i][j] = dp[i][j-1] + dp[i-1][j];    			
    		}
    	}
    }
    return m > 0 && n > 0 ? dp[m-1][n-1] : 0;
};