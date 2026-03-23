// Image Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const sliderBefore = document.getElementById('slider-before');
    const sliderHandle = document.getElementById('slider-handle');

    if (slider && sliderBefore && sliderHandle) {
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            sliderBefore.style.width = `${val}%`;
            sliderHandle.style.left = `${val}%`;
        });
    }

    // Window resize handling for the before image width to keep it correctly proportioned
    const handleResize = () => {
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            const containerWidth = sliderContainer.offsetWidth;
            const beforeImg = document.querySelector('.slider-image-before img');
            if (beforeImg) {
                beforeImg.style.width = `${containerWidth}px`;
            }
        }
    };

    window.addEventListener('resize', handleResize);
    // Initialize properly
    setTimeout(handleResize, 100);

    // Glow Hover Effect for Bento Cards
    const cards = document.querySelectorAll('.bento-card');
    
    cards.forEach(card => {
        const glow = card.querySelector('.card-glow');
        if (!glow) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
            glow.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    });
});
