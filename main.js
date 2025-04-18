// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
function sendMail(){
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
    
        const params = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
    
        console.log("Sending EmailJS request with params:", params);
    
        emailjs.send("service_c6lsb0o", "template_yjgv5jf", params)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            }, function(error) {
                console.error("FAILED...", error);
                alert("Failed to send message. Please try again.");
            });
    });
}
