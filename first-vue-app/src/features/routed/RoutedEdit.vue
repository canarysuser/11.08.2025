<script setup>
import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ProductAPIService } from '../products/ProductAPIService';

var model= ref({});
const route = useRoute(); 
const router=useRouter();
const id = route.params.id; 

watch(()=>route.params.id, fetchProduct, {immediate: true} );

async function fetchProduct(id) { 
    try { 
        var service = new ProductAPIService(); 
        model.value = await service.getProductById(id); 
    } catch (err) { 
        console.log('error while fetching.', err)
    }
}

function handleChange(e) { 
    model.value[e.target.name] = e.target.value;
}
async function submit(e) { 
     var service = new ProductAPIService(); 
    await service.update(model.value);
    router.push({name:'routedlist'});
}
</script>
<template>
   <div class="card shadow mt-5 m-auto w-75">
        <div class="bg-info card-header d-flex">
            <h2 class="flex-grow-1 text-center"> Routed Edit {{ id }}</h2>
            <div class="flex-grow-0">
                <RouterLink :to="{name:'routedlist'}" class="btn btn-dark">Back to List</RouterLink>
            </div>
        </div>
        <div class="card-body">
           <form @submit.prevent.stop="submit">
                <input type="hidden" name="productId" :value="model.id" />
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
