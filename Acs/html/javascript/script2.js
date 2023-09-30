// Sample admin credentials
const adminUsername = "admin";
const adminPassword = "password";

// Function to check entered credentials are valid
function checkCredentials() {
    const enteredUsername = prompt("Enter your username:");
    const enteredPassword = prompt("Enter your password:");

    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
        // Valid credentials, grant access to admin controls
        document.getElementById("admin-controls").style.display = "block";
    } else {
        // Invalid credentials, deny access
        alert("Invalid credentials. Access denied.");
    }
}

// Call the checkCredentials function when the page loads
window.onload = function () {
    checkCredentials();
};