document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Basic validation (you can add more sophisticated validation)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Display a success message (replace with actual submission logic)
        alert('Message sent successfully!');
        form.reset(); // Clear the form
    });
});
