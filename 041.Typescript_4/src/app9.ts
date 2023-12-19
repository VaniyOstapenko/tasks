//Создайте класс CircleC,который содержит свойство radius(радиускруга) и метод getCircumference() (вычисление длины окружности). Создайте
//экземпляр класса CircleC и выведите длину окружности. Длина окружности: 2 * π * r

class CircleC {
  radius: number;
  getCircumference(r: number): number {
    return 2 * 3.14 * r;
  }
}

const circleC = new CircleC();
circleC.radius = 15;
console.log(circleC.getCircumference(circleC.radius));
