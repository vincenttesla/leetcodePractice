/**
 * 21.Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
	var a = l1;
	var b = l2;
	var l3 = new ListNode(0);
    var tail = l3;
    while(a !== null && b!== null){
    	if(a.val > b.val){
    		tail.next = new ListNode(b.val);
    		b = b.next;
    	}else{
    		tail.next = new ListNode(a.val);
    		a = a.next;
    	}   	
    	tail = tail.next;
    }
    if(a === null){
    	while(b !== null){
    		tail.next = new ListNode(b.val);
    		b = b.next;
    		tail = tail.next;
    	}
    }
    else if(b === null){
    	while(a !== null){
    		tail.next = new ListNode(a.val);
    		a = a.next;
    		tail = tail.next;
    	}
    }
    return l3.next;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}