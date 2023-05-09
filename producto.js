class ProductManager {
    constructor() {
      this.products = [];
    }

    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      const newProduct = {
        ...product,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  }

const productManager = new ProductManager();

console.log(productManager.getProducts());

const newProduct = {  
  id : id,  
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25,
};

productManager.addProduct(newProduct);
console.log(productManager.getProducts()); 