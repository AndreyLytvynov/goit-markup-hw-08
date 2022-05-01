// function includes(array, value) {
//     for (const elementOftArray of array) {
//         if (elementOftArray === value) {
//             return true;
//         }
//     }
// }

// console.log(includes([1, 2, 3, 4], 5));

function includes(array, value) {
    // Change code below this line
    if (array.indexOf(value) !== -1) {
        return true;
    } else {
        return false;
    }
    // Change code above this line
}
console.log(includes([1, 2, 3, 4], 7));
