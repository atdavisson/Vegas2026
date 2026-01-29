function toggleBlur(state) {
    const modalOverlay = document.getElementById('modal-overlay');
    if (state) {
        modalOverlay.style.display = 'flex'; /* Show the overlay and blur */
    } else {
        modalOverlay.style.display = 'none'; /* Hide the overlay and unblur */
    }
}