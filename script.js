// Initialize EmailJS (only once)

emailjs.init({publicKey: "6ebhzoPl64Kt8JBne"})
const form = document.querySelector("#contact-form");
const status = document.querySelector("#status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_gt1qvj6","template_t28slyz", form)
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      status.textContent = "❌ Failed to send message. Please try again later.";
    });
});
