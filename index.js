// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    get diameter() {
      return 2 * this.radius;
    }
    get circumference() {
        return Math.PI * this.diameter;
      }
      get area() {
        return Math.PI * this.radius ** 2;
      }
    set diameter(num) {
      this.radius = num/2;
    }
   
    set circumference(num) {
      this.radius = num/(Math.PI * 2);
    }
    
    set area(num) {
      this.radius = Math.sqrt(num/Math.PI);
    }
  }