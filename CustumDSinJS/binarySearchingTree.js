class Node {
    constructor(value) {
        this.data = value;
        this.right = null;
        this.left = null;
    }
}

class MyBinarySearch {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        //decide what side to move left or right
        if (newNode.data < node.data) {
            //move left
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }

    }

    remove(data) {
        if (data == this.root.data) {
            this.root == null;
        } else {
            removeNode(root, data);
        }
    }

    removeNode(root, data) {
        if (root.data == data) {
            let tempRight = root.right;
            let tempLeft = root.left;

            // if (tempRight = null) {
            //     root = tempLeft;
            // } else if (tempLeft = null) {
            //     root = tempRight
            // } else {
            //     root = tempRight
            // }

            return            
        }
        if (data > root.data) {
            this.removeNode(root.right, data)
        } else {
            this.removeNode(root.left, data)
        }

        return -1;
    }

    display() {
        this.displayNode(this.root);
        console.log("---------------------");
    }

    displayNode(root) {
        if (root == null) {
            return;
        }

        this.displayNode(root.left);
        console.log(root.data);
        this.displayNode(root.right);
    }
}

console.log('Test: ');
let myTree = new MyBinarySearch();
console.log('insert(5)');
myTree.insert(5);
console.log('insert(4)');
myTree.insert(4);
console.log('insert(7)');
myTree.insert(7);
console.log('insert(2)');
myTree.insert(2);
console.log('insert(8)');
myTree.insert(8);
console.log('insert(9)');
myTree.insert(9);
console.log('insert(6)');
myTree.insert(6);
myTree.display();
myTree.remove(5);
myTree.display()