document.addEventListener('DOMContentLoaded', () => {
    // Background heart animation
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    setInterval(createHeart, 500);

    // Data handling
    const maleNameEl = document.getElementById('male-name');
    const femaleNameEl = document.getElementById('female-name');
    const startDateLabelEl = document.getElementById('start-date-label');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    let startDate;

    // Fetch data from json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            maleNameEl.textContent = data.male;
            femaleNameEl.textContent = data.female;
            startDate = new Date(data.startDate);
            
            // Format start date for display
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            startDateLabelEl.textContent = startDate.toLocaleDateString('vi-VN', options);

            updateTimer();
            setInterval(updateTimer, 1000);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            // Fallback values if fetch fails
            maleNameEl.textContent = 'Cún';
            femaleNameEl.textContent = 'Meo';
            startDate = new Date('2026-03-14T00:00:00');
            updateTimer();
            setInterval(updateTimer, 1000);
        });

    function updateTimer() {
        if (!startDate) return;

        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) {
            daysEl.textContent = "0";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days;
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
});
