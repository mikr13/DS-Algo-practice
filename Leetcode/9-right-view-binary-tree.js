let maxLevel = 0

const rightView = (root, level) => {
    if (root == null) {
        return;
    }

    if (maxLevel < level) {
        console.log(root.data);
        maxLevel = level;
    }

    rightView(root.right, level + 1);
    rightView(root.left, level + 1);
}

rightView(root, 1);
