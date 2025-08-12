<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ProductAPIService } from '../products/ProductAPIService';
import { useProductStore } from '../state/product-store-config';
var model= ref({});
const route = useRoute(); 
const store=useProductStore(); 

const id = route.params.id; 

watch(()=>route.params.id, fetchProduct, {immediate: true} );

async function fetchProduct(id) { 
    // try { 
    //     var service = new ProductAPIService(); 
    //     model.value = await service.getProductById(id); 
    // } catch (err) { 
    //     console.log('error while fetching.', err)
    // }
    model.value = store.getProductById(id)
}


</script>
<template>
    <div class="card shadow mt-5 m-auto w-75">
        <div class="bg-info card-header d-flex">
            <h2 class="flex-grow-1 text-center"> Routed Details {{ id }}</h2>
            <div class="flex-grow-0">
                <RouterLink :to="{name:'routedlist'}" class="btn btn-dark">Back to List</RouterLink>
            </div>
        </div>
        <div class="card-body">
            <dl>
                <dt>Product Id</dt>
                <dd>{{ model?.id }}</dd>
                <dt>Product Name</dt>
                <dd>{{ model?.productName }}</dd>
                <dt>Unit Price</dt>
                <dd>{{ model?.unitPrice }}</dd>
                <dt>Units In Stock</dt>
                <dd>{{ model?.unitsInStock }}</dd>
                <dt>Discontinued?</dt>
                <dd>{{ model?.discontinued }}</dd>
            </dl>
        </div>

    </div>

</template>
