// 1. Select all the elements based on your HTML IDs
const thumbnail = document.getElementById('thumbnail');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image'); // The image INSIDE the modal
const closeBtn = document.getElementById('close');

// 2. Open modal and SYNC the image source
thumbnail.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
    
    // THIS IS THE FIX: 
    // It says "Make the modal image look exactly like the current thumbnail image"
    modalImg.src = thumbnail.src; 
});

// 3. Close modal when clicking the "X"
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 4. Close modal when clicking the dark background overlay
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});