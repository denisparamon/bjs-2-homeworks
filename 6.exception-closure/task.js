// Задача 1
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  
 // Задача 2
class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return parseFloat(area.toFixed(3));
    }
  }
  
  function createTriangle(a, b, c) {
    let triangle;
    try {
      triangle = new Triangle(a, b, c);
    } catch (error) {
      triangle = {};
    }
  
    Object.defineProperties(triangle, {
      area: {
        get: function () {
          return 'Ошибка! Треугольник не существует';
        }
      },
      perimeter: {
        get: function () {
          return 'Ошибка! Треугольник не существует';
        }
      }
    });
  
    return triangle;
  }