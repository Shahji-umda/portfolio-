// Smooth Scroll Navigation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute("href").slice(1); // Remove "#" from href
      const target = document.getElementById(targetId); // Get target section

      // Scroll smoothly to the section
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

// Typing Text Effect
const text = "Hi, I'm Shahji Umda";
let i = 0;

function typeEffect() {
  const target = document.getElementById("type-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80); // Delay between each character
  }
}

window.onload = typeEffect;

// Initialize EmailJS (Replace ID with your own EmailJS User ID)
emailjs.init("2OM9bY2cIh2szhCU5");

// Contact Form Submission + Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload on form submit

  // Grab form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgDisplay = document.getElementById("form-msg");

  const emailRegex = /\S+@\S+\.\S+/; // Basic email validation pattern

  // Validation checks
  if (!name || !email || !message) {
    msgDisplay.textContent = "Please fill in all fields.";
    msgDisplay.style.color = "red";
    return;
  }
  if (!emailRegex.test(email)) {
    msgDisplay.textContent = "Please enter a valid email address.";
    msgDisplay.style.color = "red";
    return;
  }

  // Send email using EmailJS
  emailjs.sendForm("service_9syy7k5", "template_fir3bgq", this)
    .then(() => {
      msgDisplay.textContent = "✅ Message sent successfully!";
      msgDisplay.style.color = "green";
      this.reset(); // Clear form
    }, (error) => {
      msgDisplay.textContent = "❌ Failed to send. Try again.";
      msgDisplay.style.color = "red";
      console.error("Email send error:", error);
    });
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled"); // Add shadow
  } else {
    navbar.classList.remove("scrolled"); // Remove shadow
  }
});

// Button Hover Bounce Effect
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseover", () => {
    button.classList.add("bounce");
    setTimeout(() => {
      button.classList.remove("bounce");
    }, 500);
  });
});

// Generate Falling Stars Background Animation
for (let i = 0; i < 100; i++) {
  let star = document.createElement('div');
  star.className = 'star';
  star.style.position = 'absolute';
  star.style.width = '2px';
  star.style.height = '2px';
  star.style.background = 'white';
  star.style.borderRadius = '50%';
  star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  star.style.top = `${Math.random() * -100}vh`; // Random starting vertical offset
  star.style.opacity = Math.random(); // Random opacity
  star.style.animation = `moveStar ${2 + Math.random() * 3}s linear infinite`;

  document.body.appendChild(star);
}