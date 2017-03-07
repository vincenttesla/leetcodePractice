/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var a={
    	"{":"}",
    	"[":"]",
    	"(":")"
    }
    var str = s.substring(0,1);
    s = s.substring(1);
    while(s !== ""){
    	if(a[str.substring(str.length-1,str.length)] === s.substring(0,1)){
    		str = str.substring(0,str.length-1);
    	}else{
    		str += s.substring(0,1);
    	}
    	s = s.substring(1)
    }
    if(str === "")
    	return true;
    else
    	return false;
};