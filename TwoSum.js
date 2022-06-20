//Approach 1
/*Time Complexity and Space Complexity Unknown*/
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


//Approach 2. 
/*Runtime: 48 ms, faster than 98.37% of JavaScript online submissions for Two Sum.
Memory Usage: 34 MB, less than 96.69% of JavaScript online submissions for Two Sum.*/
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