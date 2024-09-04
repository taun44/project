function openLoginForm() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginForm() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
