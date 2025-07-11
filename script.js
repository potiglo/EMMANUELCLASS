// Modal functionality
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'flex'; // Open modal
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Close modal
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Close modal if click outside
    }
});

// Smooth Scroll (already added in CSS for the page)
