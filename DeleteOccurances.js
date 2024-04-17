// Delete all occurrences of a given key in a linked list

// Input: 2 -> 2 -> 1 -> 8 -> 2 ->  3 -> 2 -> 7
//        Key to delete = 2
// Output:  1 -> 8 -> 3 -> 7 

class Node{
    constructor(){
        this.data = 0;
        this.next = null;
    }
}
function push(head, new_data){
    var new_node = new Node();
    new_node.data = new_data;
    new_node.next = head;
    head = new_node;
    return head;
}
function deleteKey(head, x){
    var temp = head;
    while(head.data == x){
        head = head.next;
    }
    while(temp.next != null){
        if(temp.next.data == x ){
            temp.next = temp.next.next;
        } else{
            temp = temp.next;
        }
    }
    return head;
}
function printlist(node){
    while(node.next != null){
        console.log(node.data+ " ");
        node = node.next;
    }
    console.log(node.data);
}
var head = null;
head = push(head,7);
head = push(head,2);
head = push(head,3);
head = push(head,2);
head = push(head,8);
head = push(head,1);
head = push(head,2);
head = push(head,2);
let key = 2;
console.log("Created linked list is: "+"</br>");
printlist(head);
head = deleteKey(head,key)
console.log("Linked List after deletion is"+"</br>");
printlist(head);
