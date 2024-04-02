function emailVal() {
    // Define regex patterns for email and password validation
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

function pasVal() {
    const passwordRegex = /^.{8,}$/; // Minimum 8 characters, any character

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
    