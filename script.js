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
// ORBIT ANIMATION
const canvas = document.getElementById('orbitCanvas');
const ctx = canvas.getContext('2d');
const cx = 160, cy = 160, radius = 120;

const icons = [
  { label: 'React', color: '#61dafb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', startAngle: -Math.PI/2 },
  { label: 'Next.js', color: '#ffffff', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', startAngle: 0, invert: true },
  { label: 'PostgreSQL', color: '#7eb8f7', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', startAngle: Math.PI/2 },
  { label: 'Node.js', color: '#6fa060', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', startAngle: Math.PI },
];

const images = icons.map(ic => {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = ic.src;
  return img;
});

let rotation = 0;

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);
  ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);
  ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

function drawGlowRing(r, color, blur, alpha, lineWidth) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI*2);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.globalAlpha = alpha;
  ctx.stroke();
  ctx.restore();
}

function drawOrbit() {
  ctx.clearRect(0, 0, 320, 320);

  drawGlowRing(radius, '#9d4edd', 30, 0.3, 1);
  drawGlowRing(radius, '#c77dff', 15, 0.5, 0.8);
  drawGlowRing(radius, '#e0aaff', 5, 1, 0.5);
  drawGlowRing(70, '#9d4edd', 8, 0.2, 0.5);

  ctx.save();
  ctx.font = '900 20px Orbitron, sans-serif';
  ctx.fillStyle = '#c77dff';
  ctx.textAlign = 'center';
  ctx.shadowColor = '#9d4edd';
  ctx.shadowBlur = 25;
  ctx.fillText('CORE', cx, cy - 10);
  ctx.fillText('TECH', cx, cy + 14);
  ctx.shadowBlur = 0;
  ctx.font = '9px Arial';
  ctx.fillStyle = '#555';
  ctx.fillText('Technologies I work with', cx, cy + 32);
  ctx.restore();

  icons.forEach((ic, i) => {
    const angle = ic.startAngle + rotation;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;

    ctx.save();
    ctx.translate(x, y);

    ctx.shadowColor = ic.color;
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#0d0d0d';
    roundRect(ctx, -22, -22, 44, 44, 10);
    ctx.fill();
    ctx.strokeStyle = ic.color;
    ctx.lineWidth = 1;
    roundRect(ctx, -22, -22, 44, 44, 10);
    ctx.stroke();
    ctx.shadowBlur = 0;

    if (images[i].complete && images[i].naturalWidth > 0) {
      if (ic.invert) ctx.filter = 'invert(1)';
      ctx.drawImage(images[i], -14, -16, 28, 28);
      ctx.filter = 'none';
    }

    ctx.font = 'bold 9px Arial';
    ctx.fillStyle = ic.color;
    ctx.textAlign = 'center';
    ctx.shadowColor = ic.color;
    ctx.shadowBlur = 8;
    ctx.fillText(ic.label, 0, 32);
    ctx.shadowBlur = 0;

    ctx.restore();
  });

  rotation += 0.006;
  requestAnimationFrame(drawOrbit);
}

drawOrbit();