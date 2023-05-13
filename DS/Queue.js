export class Queue {
    constructor() {
        this.data = []
    }

    enqueue(data) {
        this.data[this.data.length] = data
    }

    dequeue() {
        return this.data.splice(0, 1)[0]
    }

    display() {
        console.log(this.data);
    }

    length() {
        return this.data.length
    }
}

// const queue = new Queue();
// queue.enqueue(12)
// queue.enqueue(14)
// queue.enqueue(1)
// queue.enqueue(17)
// queue.enqueue(37)
// queue.display()
// queue.dequeue()
// queue.display()
// queue.dequeue()
// queue.dequeue()
// queue.enqueue(29)
// queue.display()
