// Define game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player object
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    speed: 5,
};

// Fish object
const fish = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 30,
    height: 30,
};

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    // Handle player input, collision detection, etc.
    // For simplicity, we'll just move the player towards the fish
    if (player.x < fish.x) player.x += player.speed;
    if (player.x > fish.x) player.x -= player.speed;
    if (player.y < fish.y) player.y += player.speed;
    if (player.y > fish.y) player.y -= player.speed;

    // Check for collision
    if (
        player.x < fish.x + fish.width &&
        player.x + player.width > fish.x &&
        player.y < fish.y + fish.height &&
        player.y + player.height > fish.y
    ) {
        // Fish caught
        resetFish();
    }
}

// Reset fish position
function resetFish() {
    fish.x = Math.random() * canvas.width;
    fish.y = Math.random() * canvas.height;
}

// Draw on the canvas
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = '#00F';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw fish
    ctx.fillStyle = '#F00';
    ctx.fillRect(fish.x, fish.y, fish.width, fish.height);
}

// Start the game loop
gameLoop();
