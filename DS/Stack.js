export class Stack {
    constructor() {
        this.data = []
    }

    push(data) {
        this.data[this.data.length] = data;
    }

    pop() {
        return this.data.splice(this.data.length - 1, 1)[0];
    }

    display() {
        console.log(this.data);
    }

    length() {
        return this.data.length;
    }
}

// const stack = new Stack();
// stack.push(12)
// stack.push(14)
// stack.push(1)
// stack.push(17)
// stack.push(37)
// stack.display()
// stack.pop()
// stack.display()
// stack.pop()
// stack.pop()
// stack.push(29)
// stack.display()
