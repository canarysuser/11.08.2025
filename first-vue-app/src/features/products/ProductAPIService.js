const baseUrl = "http://localhost:6001/products";

export class ProductAPIService { 
    async getAllProducts() { 
        var response = await fetch(`${baseUrl}`); 
        var result = await response.json();
        console.log('result', result)
        var productList= result; 
        return productList;
    }
    async getProductById(id) { 
        var response = await fetch (`${baseUrl}/${id}`);
        var result = await response.json(); 
        return result;
    }
    async create(product) { 
        var body = JSON.stringify(product); 
        var response = await fetch(`${baseUrl}`, {
            method: 'POST', 
            body: body, 
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        var result  = await response.json();
        return result;
    }
     async update(product) { 
        var body = JSON.stringify(product); 
        var response = await fetch(`${baseUrl}/${product.id}`, {
            method: 'PUT', 
            body: body, 
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        var result  = await response.json();
        return result;
    }
}