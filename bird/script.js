document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent.`;
        this.reset();
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
    }
});

