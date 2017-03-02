/**
 * 7.reverse integer
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var y = x;
	var nx = 0;
    while(y !== 0){
    	nx = nx*10+y%10;
    	y = parseInt(y/10);
    }
    if(nx > 2147483647|| nx < -2147483648)
    	return 0;
    return nx;
};