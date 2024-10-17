//Declare the variable
let sentence;

//When user click the submit button, the value in the text area is assigned to sentence
document.getElementById("check-button").onclick = function() {
    sentence = document.getElementById("mySentence").value;
    
    //declare a result variable and call the isPangram() with sencence as argument
    const result = isPangram(sentence);

    // Display the result in the page.
    document.getElementById("result").textContent = result 

        //if true, print this
        ? "The sentence is a pangram!" 

        //else print this
        : "The sentence is not a pangram.";
};

function isPangram(sentence) {
    // Convert the sentence to lowercase to make the check case-insensitive.
    const lowerCased = sentence.toLowerCase();

    // Create a set to store unique letters.
    const letterSet = new Set();

    // Loop through each character in the sentence.
    for (let char of lowerCased) {
        // Check if the character is a letter (a-z).
        if (char >= 'a' && char <= 'z') {
            
            //if is a letter, char will be added to letterSet
            letterSet.add(char);
        }
    }

    // If the set contains 26 letters (Eng alphabet), the sentence is a pangram.
    return letterSet.size === 26;
}

