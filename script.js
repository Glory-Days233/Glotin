/* COUNTDOWN */
const weddingDate = new Date("December 27, 2025 10:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  days.textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  hours.textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  minutes.textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  seconds.textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}, 1000);

/* SCROLL ANIMATION */
const items = document.querySelectorAll(".item");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));

/* MUSIC */
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.onclick = () => {
  if (music.paused) {
    music.volume = 0.4;
    music.play();
    btn.textContent = "Pause Music";
  } else {
    music.pause();
    btn.textContent = "Play Music";
  }
};

/* SPLASH SCREEN - Tap/Click to Enter */
const splash = document.getElementById('splash');
const mainContent = document.getElementById('main-content');

splash.addEventListener('click', () => {
  splash.style.opacity = '0';
  splash.style.visibility = 'hidden';
  mainContent.style.display = 'block';
  
  // Optional: Start music automatically when entering (uncomment if desired)
  // music.volume = 0.4;
  // music.play();
  // btn.textContent = "Pause Music";
});