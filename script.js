function handleDenounce() {
    const messageElement = document.getElementById('message');
    
    messageElement.classList.add('denounced');
    
    messageElement.innerHTML = '¡Hala Madrid! 👑 Your allegiance is now corrected.';
    
    const buttonElement = document.getElementById('denounce-button');
    if (buttonElement) {
        buttonElement.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const denounceButton = document.getElementById('denounce-button');
    
    if (denounceButton) {
        denounceButton.addEventListener('click', handleDenounce);
    }
});