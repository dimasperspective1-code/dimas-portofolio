console.log("Portfolio Dimas Loaded 🚀");

// =====================
// EMAILJS INIT
// Ganti "YOUR_PUBLIC_KEY" dengan Public Key dari dashboard EmailJS kamu
// =====================
emailjs.init("gX6PKruTjvru6FbRC");

// =====================
// CONTACT FORM
// =====================
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Ganti dengan Service ID & Template ID dari dashboard EmailJS kamu
  emailjs.sendForm("service_vzaal74", "template_uvb64jc", this)
    .then(() => {
      alert("✅ Pesan berhasil dikirim! Saya akan segera menghubungi kamu.");
      form.reset();
    })
    .catch((error) => {
      alert("❌ Gagal mengirim pesan. Silakan coba lagi.");
      console.error("EmailJS error:", error);
    })
    .finally(() => {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    });
});

// =====================
// HAMBURGER MENU (MOBILE)
// =====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Tutup menu kalau klik link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// =====================
// ACTIVE NAV LINK ON SCROLL
// =====================
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});// FADE IN ON SCROLL
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));
// TYPING EFFECT
const text = "Crafting High Performance Digital Experiences";
const typingEl = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

typeWriter();