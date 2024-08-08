class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {

    constructor() {
        this.head = null;
    }

    display() {
        let k = this.head;

        console.log('DISPLAY')

        while (k != null) {
            console.log(k.data);
            k = k.next
        }
    }

    addAtTheEnd(data) {
        let k = this.head;
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            while (k.next !== null) {
                k = k.next;
            }

            k.next = node;
        }
    }

    addAtTheBeginning(data) {
        const node = new Node(data);
        node.next = this.head
        this.head = node;
    }

    /**
     * 
     * @param {number} data 
     * @param {number} position indexed from 1
     */
    addAtAPosition(data, position) {
        const node = new Node(data);

        if (position === 1) {
            this.addAtTheBeginning(data)
        } else {
            let temp = this.head
            let prev = null;
            let k = 1;

            while (temp !== null && k < position) {
                k++;
                prev = temp;
                temp = temp.next;
            }

            prev.next = node;
            node.next = temp;
        }
    }

    removeByData(data) {
        let k = this.head;

        while (k.next !== null) {
            if (k.next.data === data) {
                k.next = k.next.next;
                break;
            }

            k = k.next
        }
    }

    removeAtTheBeginning() {
        this.head = this.head.next;
    }

    removeAtTheEnd() {
        let temp = this.head

        while (temp.next.next !== null) {
            temp = temp.next;
        }

        temp.next = null;
    }

    /**
     * 
     * @param {number} position indexed from 1
     */
    removeAtAPosition(position) {
        let temp = this.head;
        let prev = null;
        let k = 1;

        if (position === 1) {
            this.removeAtTheBeginning()
        } else {
            while (k < position & temp !== null) {
                k++;
                prev = temp;
                temp = temp.next;
            }

            if (temp === null) {
                return;
            } else {
                temp = temp.next
                prev.next = temp;
            }
        }
    }

    reverse() {
        let temp = this.head;
        let prev = null;
        let next = null;

        while (temp !== null) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        this.head = prev;
    }

    length() {
        let temp = this.head;
        let count = 0;

        while (temp !== null) {
            count++;
            temp = temp.next;
        }

        console.log(count);
    }

    /**
     * 
     * @param {number} position indexed from 1
     */
    getAtPosition(position) {
        let temp = this.head;
        let k = 1;

        while (k < position && temp !== null) {
            k++;
            temp = temp.next;
        }

        if (temp !== null) {
            console.log(temp.data);
        } else {
            console.log('Position not found');
        }
    }

    /**
     * 
     * @param {number} position indexed from 1
     */
    getFromEnd(position) {
        let temp = this.head;
        let prev = this.head;

        for (let i = 0; i < position; i++) {
            temp = temp.next;
        }

        while (temp !== null) {
            temp = temp.next;
            prev = prev.next;
        }

        console.log(prev.data);
    }

}

const linkedList = new LinkedList();
linkedList.addAtTheEnd(10)
linkedList.addAtTheEnd(12)
linkedList.addAtTheEnd(14)
// linkedList.addAtTheEnd(18)
// linkedList.addAtTheEnd(2)
// linkedList.display()
linkedList.addAtTheBeginning(1)
linkedList.display()
// linkedList.addAtTheEnd(20)
// linkedList.display()
// linkedList.addAtAPosition(25, 2)
// linkedList.display()
// linkedList.removeByData(12)
// linkedList.display()
// linkedList.removeAtTheBeginning()
// linkedList.display()
// linkedList.removeAtTheEnd()
// linkedList.display()
// linkedList.removeAtAPosition(3)
// linkedList.display()
// linkedList.reverse()
// linkedList.display()
linkedList.getAtPosition(2)
linkedList.getFromEnd(2)
