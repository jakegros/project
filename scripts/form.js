document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Additional validation if needed before sending the form data?

    // This is a simulated form submission
    // Replace this with actual form submission to a backend endpoint using Fetch API
    setTimeout(() => {
        document.getElementById("status").textContent = "Form submitted successfully!";
        document.getElementById("contact-form").reset();
    }, 1000);
});
