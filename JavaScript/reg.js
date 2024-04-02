function emailValidation() {
    // Define regex patterns for email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Get input values
    const email = document.getElementById("email").value.trim();
    document.getElementById("email-error").textContent = "";

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").style.color = "red";
        document.getElementById("email-error").textContent = "Invalid Email Address.";
    } else {
        document.getElementById("email-error").style.color = "green";
        document.getElementById("email-error").textContent = "Valid Email Address.";
    }

    if (email.match(emailRegex)) {
        // Disable the submit button
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }
}

function usernameValidation() {
    // Define regex patterns for username and password
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric and underscores, 3-20 characters

    const username = document.getElementById("username").value.trim();
    document.getElementById("username-error").textContent = "";

    // Validate username
    if (!usernameRegex.test(username)) {
        document.getElementById("username-error").style.color = "red";
        document.getElementById("username-error").textContent = "Invalid Username.";
    } else {
        document.getElementById("username-error").style.color = "green";
        document.getElementById("username-error").textContent = "Valid Username.";
    }

    if (email.match(usernameRegex)) {
        // Disable the submit button
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }

}

const passwordRegex = /^.{8,}$/; // Minimum 8 characters, any character

function passwordValidation() {

    const password = document.getElementById("password").value.trim();
    document.getElementById("password-error").textContent = "";

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById("password-error").style.color = "red";
        document.getElementById("password-error").textContent = "Password must be at least 8 characters long.";
    } else {
        document.getElementById("password-error").style.color = "green";
        document.getElementById("password-error").textContent = "Valid Password.";
    }

    if (password.match(passwordRegex)) {
        // Disable the submit button
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }
}

function confirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPass").value;
    document.getElementById("passwordError").textContent = "";

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").textContent = "Password do not match.";
        // Disable the submit button if passwords do not match
        document.getElementById("btn").disabled = true;
    } else {
        // Check if the password meets the minimum length requirement
        if (password.match(passwordRegex)) {
            document.getElementById("passwordError").style.color = "green";
            document.getElementById("passwordError").textContent = "Password matched.";
            // Enable the submit button if passwords match and meet the requirements
            document.getElementById("btn").disabled = false;
        } else {
            document.getElementById("passwordError").style.color = "red";
            document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
            // Disable the submit button if the password is too short
            document.getElementById("btn").disabled = true;
        }
    }
}
