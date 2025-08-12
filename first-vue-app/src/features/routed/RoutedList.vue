<script setup>
import { computed, onBeforeUpdate, onMounted, ref } from 'vue';
import { ProductAPIService } from '../products/ProductAPIService';
import { RouterLink } from 'vue-router';
import { useProductStore } from '../state/product-store-config';

var list = ref([]);
var store = useProductStore(); 

onMounted(async () => {
    // var response = await fetch('http://localhost:6001/products');
    // var result = await response.json();
    // list.value = result;//await service.getAllProducts();
    store.fetchProducts();
   
})
var search = ref("");
// var computedList = computed(()=>{
//     return search.value.length>0?
//          list.value.filter(c=>c.productName.toLowerCase().includes(search.value.toLowerCase()))
//          : list.value
// })
</script>

<template>
    <div class="card shadow m-auto mt-5 mx-5">
        <div class="card-header bg-info  p-2 d-flex ">
            <div class="text-center flex-grow-1 h3">
                Product List <span class="fs-6 badge rounded-pill text-bg-danger">Items: {{ store.productCount }}</span>
            </div>

            <RouterLink class="btn btn-warning" :to="{name:'routednew'}">Create</RouterLink>
        </div>
        <div class="card-body mb-5">
            <div class="input-group border-1 m-auto bg-secondary p-2 mb-2">
                <div class="input-group-text">Items: {{store.productCount}} Search</div>
                <input type="search" class="form-control" v-model="search"/>
            </div>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in store.productList" :key="key">
                        <td>{{ item.productName }}</td>
                        <td>{{ item.unitPrice }}</td>
                        <td> 
                            <RouterLink :to="{name:'routeddetails', params:{id: item.id}}"
                            class="btn btn-sm btn-secondary">View</RouterLink>
                            <RouterLink :to="{name:'routededit', params:{id: item.id}}"
                            class="btn btn-sm btn-success">Update</RouterLink>
                            <!-- <button @click="selectItem(item.productId)" 
                            class="btn btn-sm btn-secondary">View</button>
                            <button @click="emits('update',item.productId)" 
                            class="btn btn-sm btn-success">Edit</button>
                            <button @click="emits('delete',item.productId)" 
                            class="btn btn- sm btn-danger">Remove</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
