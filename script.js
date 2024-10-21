// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let chars ='';
    if (options.includeUppercase) chars += uppercase;
    if (options.includeLowercase) chars += lowercase;
    if (options.includeNumbers) chars += numbers;
    if (options.includeSpecialChars) chars += specialChars;
    if (chars === "") {
        alert("Mohon pilih salah satu opsi!");
        return "";
    }
    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
    document.getElementById('generateBtn').addEventListener('click', () => {
        const length = parselnt(document.getElementById('length').ariaValueMax, 10);
        const options = {
            includeUppercase: document.getElementById('includeUppercase').checked,
            includeLowercase: document.getElementById('includeLowercase').checked,
            includeNumbers: document.getElementById('includeNumbers').checked,
            includeSpecialChars: document.getElementById('includeSpecialChars').checked,

        }
        const password = generatePassword(length, options);
        document.getElementById('passwordOutput').textContent = password;
    });
// BONUS: Implement the copy to clipboard functionality