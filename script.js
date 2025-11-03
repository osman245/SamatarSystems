// Initialize EmailJS (only once)
import 'dotenv/config'
emailjs.init(""); // replace with your EmailJS user ID
const form = document.querySelector("#contact-form");
const status = document.querySelector("#status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm(process.env.EMAIL_JS,process.env.TEMPLATE_JS, form)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      status.textContent = "❌ Failed to send message. Please try again later.";
    });
});
