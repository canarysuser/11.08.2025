import { defineStore } from "pinia";
import { ProductAPIService } from "../products/ProductAPIService";

export const useProductStore = defineStore(
    "productStore",
    {
        state: ()=>({
            productList: [], 
            selectedProduct:{},
            isLoading: false,
            hasError: false
        }),
        getters: {
            productCount: (state)=>state.productList.length, 
            getProductById: (state) => (id)=>state.productList.find(p=>p.id==id)
        }, 
        actions: {
            async fetchProducts() { 
                var service=new ProductAPIService();
                var items = await service.getAllProducts(); 
                this.productList=items;
            }, 
            async create(product) { 
                var service=new ProductAPIService();
                await service.create(product);
                var items = await service.getAllProducts(); 
                this.productList=items;
            }
        }
    }
)