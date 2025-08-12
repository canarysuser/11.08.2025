<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue';
import { ProductAPIService } from '../products/ProductAPIService';
import { RouterLink } from 'vue-router';

var list = ref([]);

onMounted(async () => {
    var response = await fetch('http://localhost:6001/products');
    var result = await response.json();
    list.value = result;//await service.getAllProducts();
   
})

</script>

<template>
    <div class="card shadow m-auto mt-5 mx-5">
        <div class="card-header bg-info  p-2 d-flex ">
            <div class="text-center flex-grow-1">
                Product List
                
            </div>

            <RouterLink class="btn btn-warning" :to="{name:'routednew'}">Create</RouterLink>
        </div>
        <div class="card-body mb-5">
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in list" :key="key">
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
