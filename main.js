document.querySelectorAll('.schedule-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = days[new Date().getDay()];
document.querySelectorAll('.day-title').forEach(title => {
    if (title.textContent === currentDay) {
        title.parentElement.style.background = 'linear-gradient(45deg, #FEC7D7, #D4ADFC)';
        title.parentElement.style.color = 'var(--main-bg)';
        title.style.textShadow = '0 0 10px rgba(42, 9, 68, 0.5)';
    }
});