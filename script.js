const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC300",
    "#581845", "#DAF7A6", "#900C3F", "#FF5733", "#C70039",
    "#FFC300", "#900C3F", "#DAF7A6", "#581845", "#3498DB",
    "#9B59B6", "#1ABC9C", "#F39C12", "#E74C3C", "#2ECC71",
    "#D35400", "#7F8C8D", "#34495E", "#F1C40F", "#16A085",
    "#8E44AD", "#2980B9", "#E67E22", "#2C3E50", "#C0392B",
    "#E74C3C", "#1ABC9C", "#9B59B6", "#34495E", "#7F8C8D",
    "#D35400", "#16A085", "#2980B9", "#2ECC71", "#F1C40F",
    "#E67E22", "#C0392B", "#3498DB", "#8E44AD", "#F39C12",
    "#E74C3C", "#9B59B6", "#1ABC9C", "#2ECC71", "#E67E22"
];

// Function to change the background color randomly
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Listen for spacebar keypress and screen click
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('click', changeColor);
