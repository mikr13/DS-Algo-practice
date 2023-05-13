class Solution {
    constructor() {
        this.answer = []
    }
    // Function to return a list containing the inorder traversal of the tree.
    inOrder(root) {
        // your code here
        if (root == null) {
            return this.answer;
        }
        this.inOrder(root.left)
        this.answer.push(root.data)
        this.inOrder(root.right)
    }
}

const solution = new Solution()

solution.inOrder()
