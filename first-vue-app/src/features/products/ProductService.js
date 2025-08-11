import { Product } from "./product-model"

const productList=[
    new Product(101, 'Markers', 10, 90, false),
    new Product(102, 'Erasers', 20, 80, true),
    new Product(103, 'Pencils', 30, 70, true),
    new Product(104, 'Boards', 40, 60, false),
    new Product(105, 'Papers', 50, 50, true),
    new Product(106, 'Pens', 60, 40, true)
]

export class ProductService 
{
    getAllProducts() { 
        return productList; 
    }
    getProductsById(pId) { 
        return productList.find(c=>c.productId==parseInt(pId)); 
    }

    create(product) { 
        var item = this.getProductsById(product.productId); 
        if(item===null) { 
            var maxId = productList[0]; 
            for(var x of productList){
                if(x.productId>maxId) maxId=x.productId;
            }
            var lastId=maxId + 1; 
            product.productId=lastId; 
            productList.push(product);
        }
    }
    update(product) { 
        var index=productList.findIndex(c=>c.productId==product.productId); 
        if(index > -1) { 
            productList.splice(index, 1, product);
        }
    }
    delete(productId) { 
        var index=productList.findIndex(c=>c.productId==productId); 
        if(index > -1) { 
            productList.splice(index, 1);
        }
    }
}

