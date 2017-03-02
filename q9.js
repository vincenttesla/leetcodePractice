/**
 * 9.Palindrome Number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x > 2147483647|| x < -2147483648)
    	return false;
    if(x < 0)
    	return false;
    var y = x;
	var nx = 0;
    while(y !== 0){
    	nx = nx*10+y%10;
    	y = parseInt(y/10);
    }
    if(x === nx)
    	return true;
    else
    	return false;
};