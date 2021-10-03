//This hashTable does not handle colision wells.
//This is a simple demo

class HashTable {
    constructor(size) {
        //Not dynamic implementation
        this.hashArray = new Array(size)
    }

    set(key, value) {
        let hashKey = this.hash(key);
        this.hashArray[hashKey] = value;
    }

    get(key) {
        let hashKey = this.hash(key);
        return this.hashArray[hashKey];
    }

    //!NOTE: Not the best hashMethod if key have the same value
    hash(key) {
        return key.length % this.hashArray.length;
    }
}

let newHs = new HashTable(20);

newHs.set('test', 4);
newHs.set('hello', 2);
console.log(newHs.get('test'));
console.log(newHs.get('hello'));