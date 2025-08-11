export class ProductAPIService { 
    async getAllProducts() { 
        var response = await fetch("/products.json"); 
        var result = await response.json();
        var productList= result.products; 
        return productList;
    }
}