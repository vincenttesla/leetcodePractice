/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var l3 = new ListNode(0);
    l3.next = new ListNode(0);
    var head = l3;
    var a = l1.val;
    var b = l2.val;
    var sum = a+b+carry;
    while(sum !== 0||l1.next !== null||l2.next !== null){
        l3.next = new ListNode(0);
        l3 = l3.next;
        if(sum < 10){
    		l3.val = sum;
    		carry = 0;
    	}else{
    		l3.val = sum - 10;
    		carry = 1;
    	}
    	if(l1.next === null){
            a = 0;
        }else{
            l1 = l1.next;
            a = l1.val;
        }
         if(l2.next === null){
            b = 0;
        }else{
            l2 = l2.next;
            b = l2.val;
        }
        sum = a+b+carry;
    }
    return head.next;
};
//advanced
var addTwoNumbers2 = function(l1, l2){
	var sumList = new ListNode(0);
	var carry = 0;
	var p = l1;
	var q = l2;
	var r = sumList;
	while(p !== null || q !== null){
		var x = (p === null) ? 0:p.val;
		var y = (q === null) ? 0:q.val;
		var sum = x + y + carry;
		carry = sum / 10;
		r.next = new ListNode(sum % 10);
		r = r.next;
		if(p !== null){p = p.next;}
		if(q !== null){q = q.next;}
	}
	if(carry > 0){
		r.next = new ListNode(carry);
	}
	return sumList.next;
};