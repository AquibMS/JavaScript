// Given a linked list, check if the linked list has a loop (cycle) or not.
// // Floyd’s Cycle-Finding Algorithm:
// Traverse linked list using two pointers.
// Move one pointer(slow_p) by one and another pointer(fast_p) by two.
// If these pointers meet at the same node then there is a loop. If pointers do not meet then the linked list doesn’t have a loop.

let head;
class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}
function push(new_data){
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}
function detectLoop(){
    let slow_p = head;
    let fast_p = head;
    let flag = 0;
    while(slow_p != null && fast_p != null && fast_p.next != null){
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if(slow_p == fast_p){
            flag = 1;
            break;
        }
    }
    if(flag == 1){
        console.log("Loop found");
    } else {
        console.log("No Loop Found");
    }
}
push(20);
push(4);
push(15);
push(10);
head.next.next.next.next = head;
detectLoop();
