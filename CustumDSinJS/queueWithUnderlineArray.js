//Queue using a array as underline Data Structure

class Queue {
    constructor() {
        this.element = [];
    }

    //add an element to the queue
    add(data) {
        this.element.push(data);
    }

    //remove and return the head element
    remove() {
        return this.element.shift();
    }

    //Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
    peek() {
        if (this.element[0] != null) {
            return this.element[0]
        }
        return null;
    }

    //check if it empty
    isEmpty() {
        return this.element.length == 0;
    }

    //print the elements
    print() {
        if (this.element.length == 0) {
            console.log('Queue Stack!');
            return;
        }
        for (let i = this.element.length - 1; i >= 0; i--) {
            console.log(this.element[i]);
        }
    }
}

//test
let myQueue = new Queue();
console.log('add(0)');
console.log('add(1)');
console.log('add(2)');
myQueue.add(0);
myQueue.add(1);
myQueue.add(2);
console.log('print():');
myQueue.print();
console.log('peek():');
console.log(myQueue.peek());
console.log('remove():');
myQueue.remove();
console.log('print():');
myQueue.print();
console.log('remove():');
console.log(myQueue.remove());
console.log('print():');
myQueue.print();
console.log(`isEmpty(): ${myQueue.isEmpty()}`);
console.log('remove():');
console.log(myQueue.remove());
console.log(`isEmpty(): ${myQueue.isEmpty()}`);