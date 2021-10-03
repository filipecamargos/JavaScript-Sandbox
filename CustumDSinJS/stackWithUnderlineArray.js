class MyStack {
    constructor() {
        this.elements = [];
    }

    push(data) {
        this.elements.push(data);
    }

    pick() {
        if (this.elements.length > 0) {
            return this.elements[this.elements.length - 1];
        }
        return null;
    }

    pop() {
        return this.elements.pop();
    }

    print() {
        if (this.elements.length == 0) {
            console.log('Empty Stack!');
            return;
        }
        for (let i = this.elements.length - 1; i >= 0; i--) {
            console.log(this.elements[i]);
        }
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