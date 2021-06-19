// ITERATIVE APPROACH
const vowels = ["a", "e", "i", "o", "u"]


function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;


    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
}

// REGULAR EXPRESSIONS


