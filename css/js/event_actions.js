// === Join Event Button Animation ===
const joinButtons = document.querySelectorAll('.join-btn');

joinButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Button pop animation
    gsap.fromTo(btn, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });

    // Optional: simple confetti effect
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
      confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
      confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
      confettiContainer.remove();
    }, 1500);
  });
});

// === Event Filter (Optional) ===
const categorySelect = document.getElementById('category');
const events = document.querySelectorAll('.event-card');

if (categorySelect) {
  categorySelect.addEventListener('change', (e) => {
    const value = e.target.value;

    events.forEach((event) => {
      if (value === 'all' || event.querySelector('h3').innerText.toLowerCase().includes(value)) {
        event.style.display = 'block';
      } else {
        event.style.display = 'none';
      }
    });
  });
}
