document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textToType = textElement.textContent;

    // Clear the text initially
    textElement.textContent = '';

    // Function to simulate typing
    function typeText(index) {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            setTimeout(function () {
                typeText(index + 1);
            }, 100); // Adjust typing speed (milliseconds)
        }
    }

    // Start typing when the page loads
    typeText(0);
});