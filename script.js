document.addEventListener('DOMContentLoaded', () => {
    // Random glitch effect on background
    const body = document.body;
    setInterval(() => {
        if (Math.random() > 0.95) {
            body.style.filter = 'invert(1) hue-rotate(90deg)';
            setTimeout(() => {
                body.style.filter = 'none';
            }, 50);
        }
    }, 2000);
});
