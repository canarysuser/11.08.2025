<script setup>
import { ref } from 'vue';
import ProductDetails from './ProductDetails.vue';
import ProductList from './ProductList.vue';
import { ProductService } from './ProductService';
import { Product } from './product-model';
import { onMounted } from 'vue';
import { ProductAPIService } from './ProductAPIService';

var service = new ProductService(); 
var productList=ref([]); //service.getAllProducts()); 
var selectedProduct=ref(new Product(0, '', 0,0,false));
var isViewOnly=ref(false);

onMounted(async ()=>{
    var service = new ProductAPIService(); 
    var result = await service.getAllProducts(); 
    productList.value = result;
});

function onSelectItem(productId) { 
    console.log('Product Home', productId)
    selectedProduct.value = service.getProductsById(productId);
    console.log('Product Home selected Item', selectedProduct.value);
    isViewOnly.value=true;
}
function onEditItem(productId) { 
    console.log('Product Home Edit')
     selectedProduct.value = service.getProductsById(productId);
    isViewOnly.value=false;
}
function onCreateItem() { 
    console.log('Product Home Create')
    selectedProduct.value = new Product(1, '', 0, 0, false)
    isViewOnly.value=false;
}
function onDeleteItem(productId) { 
    console.log('Product Home Delete')
     selectedProduct.value = service.getProductsById(productId);
    isViewOnly.value=true;
}

</script>

<template>

<div class="row">
    <div class="col-6">
        <ProductList 
            :list="productList" 
            @view="onSelectItem"
            @update="onEditItem"
            @create="onCreateItem"
            @delete="onDeleteItem" />
    </div>
    <div class="col-6">
        <ProductDetails :selectedItem="selectedProduct" :isReadOnly="isViewOnly">
           <!-- <template v-slot:selectedItem>
                Parent: {{ selectedProduct }}
            </template> -->
            <template v-slot:today>
                    {{  new Date().toUTCString() }}
            </template>
        </ProductDetails>
    </div>
</div>


</template>

