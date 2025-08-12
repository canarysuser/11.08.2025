<script setup>
import { reactive } from 'vue';
import { Product } from '../products/product-model';
import { useRouter } from 'vue-router';
import { ProductAPIService } from '../products/ProductAPIService';

let router = useRouter(); 
let model = reactive(new Product(0, '', 0, 0, false));
function handleChange(e) { 
    model[e.target.name] = e.target.value;
}
async function submit(e) { 
    var service = new ProductAPIService(); 
    await service.create(model);
    router.push({name:'routedlist'});
}
</script>
<template>
     <div class="card shadow mt-5 m-auto w-75">
        <div class="bg-info card-header d-flex">
            <h2 class="flex-grow-1 text-center"> Routed New</h2>
            
        </div>
        <div class="card-body">
            <form @submit.prevent.stop="submit">
                <input type="hidden" name="productId" :value="model.productId" />
                <div class="form-group">
                    <label for="productName">Product Name</label>
                    <input type="text" class="form-control" name="productName"
                     :value="model.productName" 
                     @change="handleChange" />
                </div>
                <div class="form-group">
                    <label for="unitPrice">Unit Price</label>
                    <input type="text" class="form-control" name="unitPrice" 
                    :value="model?.unitPrice" 
                    @change="handleChange" />
                </div>
                <div class="form-group">
                    <label for="unitsInStock">Units In Stock</label>
                    <input type="text" class="form-control" name="unitsInStock" 
                    :value="model?.unitsInStock"
                     
                        @change="handleChange" />
                </div>
                <div class="form-group">
                    <label for="discontinued">Discontinued</label>
                    <input type="checkbox" class="form-checkbox" 
                    :checked="model?.discontinued"
                        @change="handleChange" />
                </div>
                <div class="form-group text-center">
                    <button class="btn btn-lg btn-success">Save</button>
                </div>
            </form>
        </div>

    </div>
</template>
