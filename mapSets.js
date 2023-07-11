/*
Quick Question #1
What does the following code return?
new Set([1,1,2,2,3,4])
*/

{1,2,3,4}

/*
Quick Question #2
What does the following code return?
[...new Set("referee")].join("")
*/

"ref"

/*
Quick Questions #3
What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
*/

//{
//     [1,2,3] => true,
//     [1,2,3] => false
// }

/*
hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
*/
const hasDuplicate = (arr) => {
    return arr.length !== new Set([...arr]).size
}


/*## **vowelCount**

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
*/
const vowelCount = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    const vowelMapCount = new Map()
    for(letter of str.toLowerCase()){
        if (vowels.includes(letter)){
            if(vowelMapCount.has(letter)){
                vowelMapCount.set(letter, vowelMapCount.get(letter) + 1)
            } else {
                vowelMapCount.set(letter, 1)
            }
        }
    }
    return vowelMapCount

}

