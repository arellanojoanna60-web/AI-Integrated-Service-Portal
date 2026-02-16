// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = "Thank you! Your message has been sent.";

    this.reset();
});
