class FractalStairs {
    constructor(x, y, size, steps, angle) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.steps = steps;
      this.angle = angle;
    }
  
    draw() {
      translate(this.x, this.y);
  
      for (let i = 0; i < this.steps; i++) {
        rect(0, 0, this.size, this.size); 
        rotate(this.angle); 
        this.size *= 0.95; 
      }
  
    }
  }
  