//Создайте абстрактный класс Animal, содержащий
//абстрактный метод makeSound().Напишитедочерниеклассы
//DogиCat,которыенаследуютAnimalи реализуютметодmakeSound() дляиздания
//соответствующего звука. Создайте объектыклассовDogиCatивызовитеихметоды
//makeSound().

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Gaf";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Miu";
  }
}

const dog = new Dog();
console.log(dog.makeSound());
const cat = new Cat();
console.log(cat.makeSound());
