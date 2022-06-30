

//Approach 1
var isAnagram = function (s, t) {
    var sArray = s.split("").sort()
    var tArray = t.split("").sort()
    if (JSON.stringify(sArray) === JSON.stringify(tArray)) {
        console.log(true)
    } else { console.log(false) }

};
/*The Time Complexity of Approach 1 is */
/*The Space Complexity of Approach 1 is */


//Approach 2
function isAnagram(s, t) {
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    return Object.keys(map).every(k => map[k] === 0);
}
/*The Time Complexity of Approach 1 is */
/*The Space Complexity of Approach 1 is */

isAnagram("anagram", "nagaram")