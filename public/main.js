
<!-- Place this in your main.js file -->
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode"); // toggle dark mode class

  if (document.documentElement.classList.contains("dark-mode")) {
    themeIcon.className = "ri-sun-line"; // sun in dark mode
  } else {
    themeIcon.className = "ri-moon-line"; // moon in light mode
  }
});
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Switch active button
    document.querySelectorAll('.tab-button')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show corresponding content only
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-content')
      .forEach(tc => tc.classList.toggle(
        'active', tc.id === target
      ));
  });
});


function showSkills(type) {
  const tech = document.getElementById('technical');
  const soft = document.getElementById('soft');

  if (type === 'technical') {
    tech.classList.add('active');
    soft.classList.remove('active');
  } else {
    soft.classList.add('active');
    tech.classList.remove('active');
  }
}

// Show Technical Skills by default when page loads
window.onload = () => showSkills('technical');



const typedText = document.querySelector(".typing-text");
const textArray = ["Web Developer", "UI/UX Designer", "Full Stack Developer", "AI/ML Enthusiast"];
let arrayIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newTextDelay = 1500; // Delay before typing next word

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    arrayIndex++;
    if (arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

document.querySelector(".contact__form").addEventListener("submit", function(event){
    event.preventDefault(); // stop form from refreshing page

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        mobile: document.querySelector('input[name="mobile"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    fetch('/contact', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            showSuccessPopup(); // Show beautiful message
            document.querySelector(".contact__form").reset(); // Reset form
        }
    })
    .catch(err => {
        console.error("Error:", err);
    });
});

function showSuccessPopup() {
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #4CAF50, #81C784);
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            color: white;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            z-index: 9999;
            transition: transform 0.3s ease;
            animation: popUp 0.5s ease forwards;">
            <i class="ri-checkbox-circle-line" style="font-size: 50px; color: #fff;"></i>
            <h3 style="margin: 15px 0;">Message Sent Successfully!</h3>
            <p style="font-size: 14px;">Thank you for contacting me. I'll reach out to you soon!</p>
            <button style="
                margin-top: 15px;
                padding: 8px 20px;
                background: #fff;
                color: #4CAF50;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: bold;
            " onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
}

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


