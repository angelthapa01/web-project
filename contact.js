const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear errors
  document.querySelectorAll(".error").forEach(e => e.innerText = "");

  if (name === "") {
    showError("name", "Name is required");
    isValid = false;
  }

  if (!email.includes("@")) {
    showError("email", "Enter valid email");
    isValid = false;
  }

  if (phone === "" || isNaN(phone)) {
    showError("phone", "Enter valid number");
    isValid = false;
  }

  if (message === "") {
    showError("message", "Message required");
    isValid = false;
  }

  if (isValid) {
    alert(`Thank you ${name}, we will respond soon <3`);
    form.reset();
  }
});

function showError(id, message) {
  const input = document.getElementById(id);
  const error = input.parentElement.querySelector(".error");
  error.innerText = message;
}