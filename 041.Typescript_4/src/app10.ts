//Создайте класс Product, который содержит объект product (продукт)с полями и price (цена продукта), title (название продукта). Реализуйте метод
//displayProductInfo(), который выводит массив продуктов, где цена>20. Создайте экземпляр класса Product и вызовите метод displayProductInfo().

interface iProd {
  price: number;
  title: string;
}

class Product {
  product: iProd[] = [
    {
      price: 10,
      title: "Картофель",
    },
    {
      price: 30,
      title: "Рыба",
    },
    {
      price: 25,
      title: "Мясо",
    },
  ];

  displayProductInfo() {
    return this.product.filter((el: iProd) => {
      if (el.price > 20) {
        return true;
      }
    });
  }
}

const product = new Product();
console.log(product.displayProductInfo());
