

function setSolution(nums) {
    let testSet = new Set(nums);
    return(testSet.size !== nums.length);
}

setSolution([1, 3, 4, 1, 6])
/*The Time Complexity of Approach 1 is O(n).In this case we just need to create a set from numbers that we are given. Constructing a set has O(N) time complexity*/
/*The Space Complexity of Approach 1 is O(n). Storing each element from the numbers array in set has O(N) space complexity.*/