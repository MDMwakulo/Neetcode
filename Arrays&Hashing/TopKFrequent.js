//My First Attempt. Works, but is not most efficient. Also, I do not know Big O for Run Time Complexity or Space Complexity.
/*var topKFrequent = function(nums, k) {
    var myMap= new Map()
    var myArray=[]
    for (let i=0; i< nums.length; i++){
        myMap.has(nums[i])? myMap.set(nums[i], ((MyMap.get(nums[i]))+1)) :          Mymap.set(nums[i], 1)
    }
    for (let entry of myMap){
        let max=0;
        if (entry.value > max){}
    }
};
topKFrequent([1,1,1,2,2,3], 2)
/*The Time Complexity of this approach is ? */
/*The Space Complexity of this approach is ? */