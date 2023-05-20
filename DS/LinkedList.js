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


    addNode(data) {
        let k = this.head;

        const node = new Node(data);

        if (this.head == null) {
            this.head = node;
        } else {
            while (k.next != null) {
                k = k.next;
            }
            k.next = node;
        }

    }

    display() {
        let k = this.head;

        console.log('DISPLAY')

        while (k != null) {
            console.log(k.data);
            k = k.next
        }
    }

    removeData(data) {
        let k = this.head;

        while (k.next != null) {

            if (k.next.data === data) {
                k.next = k.next.next;
                break;
            }

            k = k.next
        }

    }

    reverse() {
        let temp = this.head;
        let prev = null;
        let next = null;

        while (temp != null) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        this.head = prev;
    }
}

const linkedList = new LinkedList();
linkedList.addNode(10)
linkedList.addNode(12)
linkedList.addNode(14)
linkedList.addNode(18)
linkedList.addNode(2)
linkedList.display()
// linkedList.removeData(12)
// linkedList.display()
// linkedList.removeData(2)
// linkedList.display()
// linkedList.reverse()
// linkedList.display()
