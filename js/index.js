document.addEventListener('DOMContentLoaded', function() {
    const options = {
        threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 감지 후 관찰 X
            }
        });
    }, options);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        observer.observe(element);
    });
});