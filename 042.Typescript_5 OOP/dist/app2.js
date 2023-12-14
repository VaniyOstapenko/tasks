//Создайте абстрактный класс Animal, содержащий
//абстрактный метод makeSound().Напишитедочерниеклассы
//DogиCat,которыенаследуютAnimalи реализуютметодmakeSound() дляиздания
//соответствующего звука. Создайте объектыклассовDogиCatивызовитеихметоды
//makeSound().
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return "Gaf";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Miu";
    }
}
const dog = new Dog();
console.log(dog.makeSound());
const cat = new Cat();
console.log(cat.makeSound());
