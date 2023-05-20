import { Queue } from './Queue.js';
import { Stack } from './Stack.js';

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    constructor() {
        this.root = null
    }

    add(data) {
        let node = new Node(data);
        let temp = this.root

        if (temp == null) {
            this.root = node;
            return;
        }

        const queue = new Queue();

        queue.enqueue(temp);

        while (queue.length()) {
            temp = queue.dequeue();

            if (temp.left == null) {
                temp.left = node;
                break;
            } else {
                queue.enqueue(temp.left)
            }

            if (temp.right == null) {
                temp.right = node;
                break;
            } else {
                queue.enqueue(temp.right);
            }
        }
    }

    #inOrder(root = this.root) {
        if (root == null) {
            return;
        }

        this.#inOrder(root.left)
        console.log(root.data);
        this.#inOrder(root.right);
    }

    #preOrder(root = this.root) {
        if (root == null) {
            return;
        }

        console.log(root.data);
        this.#preOrder(root.left);
        this.#preOrder(root.right);
    }

    #postOrder(root = this.root) {
        if (root == null) {
            return;
        }

        this.#postOrder(root.left);
        this.#postOrder(root.right);
        console.log(root.data);
    }

    #levelOrder(root = this.root) {
        if (root == null) {
            return;
        }

        const queue = new Queue();

        queue.enqueue(root);

        while (queue.length) {
            const temp = queue.dequeue();

            if (temp == null) {
                break;
            }

            queue.enqueue(temp.left);
            queue.enqueue(temp.right);

            console.log(temp.data);
        }
    }

    #levelOrderReverse(root = this.root) {
        if (root == null) {
            return;
        }

        const queue = new Queue();
        const stack = new Stack();

        queue.enqueue(root);

        while (queue.length()) {
            const temp = queue.dequeue();

            if (temp.right)
                queue.enqueue(temp.right);
            if (temp.left)
                queue.enqueue(temp.left);

            stack.push(temp.data)
        }

        while (stack.length()) {
            console.log(stack.pop());
        }
    }

    #findMax(root = this.root) {
        let max = new Node(Number.MIN_SAFE_INTEGER);

        if (root != null) {

            const leftMax = this.#findMax(root.left);
            const rightMax = this.#findMax(root.right);

            if (leftMax.data > rightMax.data) {
                max = leftMax;
            } else {
                max = rightMax;
            }

            if (root.data > max.data) {
                max = root;
            }
        }


        return max;
    }

    #size(root = this.root) {
        if (root == null) {
            return 0;
        }

        return 1 + this.#size(root.left) + this.#size(root.right);
    }

    search(data, root = this.root) {
        if (root == null) {
            return false;
        }

        if (root.data === data) {
            return true;
        } else {
            const foundLeft = this.search(data, root.left);
            if (foundLeft) {
                return true;
            } else {
                return this.search(data, root.right);
            }
        }
    }

    /**
     * 
     * @param {'inOrder' | 'preOrder' | 'postOrder' | 'levelOrder' | 'levelOrderReverse' | 'max' | 'size'} type  
     */
    display(type) {
        console.log(`DISPLAY ${type}`);

        if (type === 'inOrder') {
            this.#inOrder(this.root);
        } else if (type === 'preOrder') {
            this.#preOrder(this.root);
        } else if (type === 'postOrder') {
            this.#postOrder(this.root);
        } else if (type === 'levelOrder') {
            this.#levelOrder(this.root);
        } else if (type === 'levelOrderReverse') {
            this.#levelOrderReverse(this.root);
        } else if (type === 'max') {
            console.log(this.#findMax(this.root).data);
        } else if (type === 'size') {
            console.log(this.#size(this.root));
        }

    }

    #isSame(leftroot, rightroot) {
        if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
            return false;

        if (leftroot && rightroot)
            return this.#isSame(leftroot.left, rightroot.right) && this.#isSame(leftroot.right, rightroot.left);
        return true;
    };

    isSymmetric(root) {
        if (!root)
            return true;

        return this.#isSame(root.left, root.right);
    }

    maxDepth(root) {
        if (!root)
            return 0;

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }

}

const bTree = new BinaryTree();
bTree.add(1)
bTree.add(2)
bTree.add(3)
bTree.add(4)
bTree.add(5)
bTree.add(6)
bTree.add(7)
bTree.display("inOrder");
bTree.add(8)
bTree.display("inOrder");
bTree.display("preOrder");
bTree.display("postOrder");
bTree.display("levelOrder")
bTree.display('levelOrderReverse')
bTree.display("max");
console.log(bTree.search(10))
bTree.display('size')
