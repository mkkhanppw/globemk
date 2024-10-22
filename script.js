const button = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');

button.addEventListener('click', () => {
    const messages = [
        "You clicked the button!",
        "JavaScript is fun!",
        "Keep exploring and learning!",
        "You're doing great!",
        "Change is good!"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    dynamicText.textContent = messages[randomIndex];
});
