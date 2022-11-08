// Function that sorts an array of book objects in alphabetical order
exports.bookSort = function(books) {
    // Using insertion sort to sort the book aray
    let n = books.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = books[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current.bookName < books[j].bookName)) {
                books[j+1] = books[j];
                j--;
            }
            books[j+1] = current;
        }
    return books;
}