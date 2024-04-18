// Flatten a binary tree into a Linked List.
// Use the intuition behind Morris’s traversal. In Morris Traversal we use the concept of a threaded binary tree.
// At a node(say cur) if there exists a left child, we will find the rightmost node in the left subtree(say prev).
// We will set prev’s right child to cur’s right child,
// We will then set cur’s right child to it’s left child.
// We will then move cur to the next node by assigning cur it to its right child
// We will stop the execution when cur points to NULL.

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
var root;
function flatten(root){
    while(root){
        if(root.left != null){
            curr = root.left;
            while(curr.left){
                curr = curr.right;
            }
            curr.right = root.right;
            root.right = root.left;
            root.left = null
        }
        root = root.right;
    }
}
function inorder(root){
    if(root == null){
        return;
    }
    inorder(root.left);
    console.log(root.data+" ");
    inorder(root.right);
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);
flatten(root);
inorder(root);
