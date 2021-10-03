//Implement a simple Linked List

//head -> node -> node -> null
//node : {data: type, next: point to the next node}

//create the node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//create the Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add an element
    add(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }

    //insert element at specifc index
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Invalid index at insetAt()!');
        }

        if (this.head == null || index == this.size) {
            this.add(data);
            return;
        }

        let newNode = new Node(data);

        if (index == 0) {
            let tempNode = this.head;
            this.head = newNode;
            newNode.next = tempNode;
        } else {
            let currentNode = this.head;
            let nextNode = this.head;
            let position = 0

            while (position < index) {
                currentNode = nextNode;
                nextNode = nextNode.next;
                position++;
            }

            currentNode.next = newNode;
            newNode.next = nextNode;
        }
        this.size++;
    }

    //remove an item from index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index at removeAt(index)!');
        } else if (this.head == null) {
            throw new Error('Empty List at removeAt(index)!');
        }

        let returnedData = null;

        if (index == 0) {
            returnedData = this.head.data;
            this.head = this.head.next;
        } else {
            let previousNode = this.head;
            let currentNode = this.head;
            let position = 0;

            while (position < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                position++;
            }

            returnedData = currentNode.data;
            previousNode.next = currentNode.next;
        }
        this.size--;
        return returnedData;
    }

    //remove based on an element
    removeElement(data) {
        if (this.head.data == data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let previousNode = this.head;
        let currentNode = this.head;

        while (currentNode != null) {
            if (currentNode.data == data) {
                previousNode.next = currentNode.next;
                this.size--;
                return true;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return -1;
    }

    //index of element
    indexOf(data) {
        if (this.head.data == data) {
            return 0;
        }

        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.data == data) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
    }

    //return the size
    length() {
        return this.size;
    }

    //check if it is empty
    isEmpty() {
        return this.head == null;
    }

    //print
    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(`-> ${currentNode.data}`)
            currentNode = currentNode.next;
        }
    }
}

const myLinkedList = new LinkedList();
console.log(myLinkedList.length());
console.log(myLinkedList.isEmpty());
myLinkedList.add("1");
myLinkedList.add("2");
myLinkedList.add("3");
myLinkedList.add("4");
myLinkedList.print();
console.log(myLinkedList.length());
console.log(myLinkedList.isEmpty());
console.log("------------------------");
myLinkedList.insertAt(0, 0);
myLinkedList.print();
console.log(myLinkedList.length());
console.log(myLinkedList.isEmpty());
console.log("------------------------");
myLinkedList.insertAt(5, myLinkedList.length());
myLinkedList.print();
console.log(myLinkedList.length());
console.log(myLinkedList.isEmpty());
console.log("------------------------");
myLinkedList.insertAt('Index 1', 1);
myLinkedList.insertAt('Index 2', 2);
myLinkedList.insertAt('Index 3', 3);
myLinkedList.insertAt('Index 5', 5);
myLinkedList.print();
console.log(myLinkedList.length());
console.log(myLinkedList.isEmpty());
console.log("------------------------");
myLinkedList.removeAt(myLinkedList.length() - 1);
myLinkedList.print();
console.log(myLinkedList.length());
console.log("------------------------");
myLinkedList.removeAt(3);
myLinkedList.print();
console.log(myLinkedList.length());
console.log("------------------------");
myLinkedList.removeElement(5);
myLinkedList.print();
console.log(myLinkedList.length());
console.log("------------------------");
myLinkedList.removeElement("Index 5");
myLinkedList.print();
console.log(myLinkedList.length());
console.log("------------------------");
console.log(myLinkedList.indexOf('Index 3'));