function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000);

    document.getElementById("contactForm").reset();
}