class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);

        if (this.top === null) {
            this.top = newNode;
        } else {
            let tempNode = this.top;
            this.top = newNode;
            newNode.link = tempNode;
        }

        return;
    }

    pick() {
        return this.top.data;
    }

    pop() {
        if (this.top === null) {
            throw new Error('Error: Trying to pop() empty stack!')
        }

        let returnedData = this.top.data;
        this.top = this.top.link;

        return returnedData;
    }

    print() {
        if (this.top === null) {
            console.log('Empty Stack!')
            return;
        }
        let currentNode = this.top;
        while (currentNode) {
            console.log(`Stack -> ${currentNode.data}`)
            currentNode = currentNode.link;
        }
        return;
    }
}

//Test Function
let myStack = new MyStack();
console.log("push(0)");
myStack.push(0);
console.log('push(1)')
myStack.push(1);
console.log('push(2)')
myStack.push(2);
console.log('pick(): ' + myStack.pick())
console.log('print():');
myStack.print();
console.log('pop(): ' + myStack.pop());
console.log('print():');
myStack.print();
console.log('pop(): ' + myStack.pop());
console.log('print():');
myStack.print();
console.log('pop(): ' + myStack.pop());
console.log('print():');
myStack.print();