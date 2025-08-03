// Navigation Functionality
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-target="${sectionId}"]`).classList.add('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        showSection(link.dataset.target);
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('responseMsg').textContent = "✅ Your message has been sent successfully!";
    this.reset();
});
