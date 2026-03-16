document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('assessmentForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.fa-microchip');
    const loader = document.getElementById('btnLoader');
    const resultBlock = document.getElementById('resultBlock');

    // 1. Loading State on Form Submit
    if (form) {
        form.addEventListener('submit', function() {
            // Disable button to prevent double clicks
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Swap text and icon for loader
            btnText.textContent = 'Processing Data...';
            btnIcon.classList.add('hidden');
            loader.classList.remove('hidden');
        });
    }

    // 2. Smooth Auto-Scroll to Results
    // If the page loads and a result exists (meaning they just submitted),
    // scroll down slightly on mobile to show the result.
    if (resultBlock && window.innerWidth <= 992) {
        setTimeout(() => {
            resultBlock.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300); // slight delay to allow animations to finish
    }
});