//Approach 1
var TwoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

var tar = 17;
var arr = [1, 3, 7, 9, 22, -5]
TwoSum(arr, tar)
/*The Time Complexity of Approach 1 is O(n^2). For each element, we try to find its complement by looping through the rest of the array which takes O(n^2) time. 
Therefore, the time complexity is O(n^2).*/
/*The Space Complexity of Approach 1 is O(1), constant space. The space required does not depend on the size of the input array, so only constant space is used.*/


//Approach 2. 
var TwoSum = function (nums, target) {
    let dic = {}
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in dic) {
            var numba=dic[target-nums[i]]
            console.log(typeof numba)
            console.log([dic[target - nums[i]], i])
        }
        dic[nums[i]] = i
        console.log(dic)
    }
}

var tar = 17;
var arr = [1, 3, 7, 9, 22, -5]
TwoSum(arr, tar)
/*The Time Complexity of Approach 2 is ?*/
/*The Space Complexity of Approach 1 is ?*/