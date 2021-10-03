/*Given an array, generate all the possible subarrays of the given array
source: https://www.geeksforgeeks.org/generating-subarrays-using-recursion/

Sove with loops and then recursion*/



function subArray(arr) {

    /*Explanation: 
        first loop start at first index of the array to length
            1st first loop [1, 2, 3, 4] - i = 0 - 1
        second loop start at the index of the first loop to length
            2nd first loop [1, 2, 3, 4] - j = 0 - 1
            4th second loop [1, 2, 3, 4] - j = 1 - 2
            6th third loop [1, 2, 3, 4] - j = 2 - 3
        third loop start at the index the first loop and go to the index of the second
            3nd first loop [1, 2, 3, 4] - z = 0 <= j - 1
            5th second loop [1, 2, 3, 4] - z = 0 <= j - 1, 2
            7th third loop [1, 2, 3, 4] - z = 0 <= j - 1, 2, 3

            So the process goes.
    */
    const subArrays = [];

    //starting point in a array at any give point
    for (let i = 0; i < arr.length; i++) {
        //from the i point to length 
        for (let j = i; j < arr.length; j++) {
            //create the subset between i and j
            let sub = []
            for (let z = i; z <= j; z++) {
                sub.push(arr[z]);
            }
            subArrays.push(sub);
        }
    }

    return subArrays;
}

//test
console.log(subArray([1, 2, 3, 4]));