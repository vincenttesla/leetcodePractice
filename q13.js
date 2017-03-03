/**
 * 13.Roman to integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var a={
		'I':1,
		'V':5,
		'X':10,
		'L':50,
		'C':100,
		'D':500,
		'M':1000
	}
	var num = 0;
	var arr = s.split("");
	for(var i=0;i<arr.length-1;i++){
		if(a[arr[i]] >= a[arr[i+1]]){
			num += a[arr[i]];
		}else{
			num -= a[arr[i]];
		}
	}
	num += a[arr[arr.length-1]];
    return num;
};