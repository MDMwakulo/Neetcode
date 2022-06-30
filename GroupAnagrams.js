
var groupAnagrams = function(strs) {
let newMap= new Map()
strs.forEach(word => {
    var split= word.split("")
    var sorted= split.sort().join("")
    console.log(sorted)
    if (newMap.has(sorted)){
        var value=newMap.get(sorted)
        value.push(word)
        
    } else {
        var anagrams=[]
        anagrams.push(word)
        newMap.set(sorted, anagrams)}
})
var newArray=[]
var values= newMap.values()
console.log(values)
for(var entry of values){newArray.push(entry)}
return newArray;
};


groupAnagrams(["eat","tea","tan","ate","nat","bat"])