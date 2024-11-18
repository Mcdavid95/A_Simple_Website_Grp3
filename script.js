function handleSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if any field is empty
    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Hide success message after 5 seconds
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000);

    // Clear form fields
    document.getElementById("contactForm").reset();
}
