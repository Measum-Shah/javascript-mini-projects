function randomNumber( ) {
    return Math.floor(Math.random() * 2);
}

const words = ['sdd', '8^&', 'ape', '*(', 'ep', '@#', 'pj', '@34', 'cvn'];

function randomWord() {
    const number = randomNumber(words.length);
    return words[number];
}



function get() {
    const chars = '01234567890!@#$%&';
    const clength = chars.length;
    let password = '';

    while (password.length < 20) {
        // Add a random word from the words array
        password = password.concat(randomWord());
        
        // Add a random character from the chars string
        password = password.concat(chars[randomNumber(clength)]);
    }

    // Trim the password to ensure it is exactly 16 characters long
    password = password.substring(0, 16);
    
    // Set the generated password to the input field with id 'password'
    document.getElementById('password').value = password;
}

