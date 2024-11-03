function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // Only draw once
}

function draw() {
    for (let i = 0; i <= height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(color('#3c8453'), color('#bcaa96'), inter);
        stroke(c);
        line(0, i, width, i);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
