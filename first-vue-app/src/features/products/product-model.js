export class Product { 
    constructor(
        pId, pName, price, stock, discontinued
    ) { 
        this.productId = pId;
        this.productName=pName; 
        this.unitPrice=price; 
        this.unitsInStock=stock; 
        this.discontinued=discontinued;
    }
}

