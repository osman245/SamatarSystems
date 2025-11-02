// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    to_email: "osm.warsame@gmail.com"
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    })
    .catch(() => {
      status.textContent = "❌ Failed to send message. Please try again later.";
    });
});
