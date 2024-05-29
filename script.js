function setup() {
    createCanvas(800, 800);
    noFill();
    fractalStairs = new FractalStairs(width / 2, height / 2, 300, 80, PI / 18);

}

function draw() {
    background(255);
    fractalStairs.draw();
    noLoop();

}