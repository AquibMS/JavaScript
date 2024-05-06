function minimizeString(word) {
    let moves = 0;
    let arr = [...word]; // Convert string to an array for easier manipulation.

    // Continuously try to find and remove characters until no more optimal deletions can be made
    let canContinue = true;
    while (canContinue) {
        canContinue = false;
        for (let i = 0; i < arr.length; i++) {
            let charToDelete = arr[i];
            let leftIndex = i - 1;
            let rightIndex = i + 1;

            // Check if the left and right neighbors are the same as the current character
            if ((leftIndex >= 0 && arr[leftIndex] === charToDelete) || (rightIndex < arr.length && arr[rightIndex] === charToDelete)) {
                // Delete the left occurrence if it exists and matches
                if (leftIndex >= 0 && arr[leftIndex] === charToDelete) {
                    arr.splice(leftIndex, 1);  // Remove left character
                    i--; // Adjust current index due to the removal
                }

                // Delete the current character
                arr.splice(i, 1);
                i--; // Adjust for the shift in indices after removal

                // Delete the right occurrence if it exists and matches
                if (rightIndex - 1 < arr.length && arr[rightIndex - 1] === charToDelete) {
                    arr.splice(rightIndex - 1, 1);
                }

                moves++;
                canContinue = true; // Indicate that we made a change and should check again
                break; // Restart the scan since the array has been modified
            }
        }
    }

    return moves;
}

// Example usage
const word = "adabacaea";
console.log(minimizeString(word)); // Outputs the number of moves.
