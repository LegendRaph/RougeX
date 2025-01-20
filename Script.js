
// Get the modal and button elements
const modal = document.getElementById('videoModal');
const watchButton = document.getElementById('watchButton');

// Open the modal when the "WATCH" button is clicked
watchButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the modal when clicking outside the video
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

