<script setup>
import { ProductService } from '@/features/products/ProductService';
import { Product } from '@/features/products/product-model';

var productList = new ProductService().getAllProducts(); 

</script>

<template>

<div class="card shadow m-auto mt-5 w-75">
    <div class="card-header bg-info  p-2 text-center">Product List</div>
    <div class="card-body">
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr><th>Id</th><th>Name</th><th>Price</th><th>Stock</th><th>In Stock?</th></tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in productList" :key="key" >
                    <td>{{ item.productId }}</td>
                    <td>{{ item.productName }}</td>
                    <td>{{ item.unitPrice }}</td>
                    <td>{{ item.unitsInStock }}</td>
                    <td>{{ item.discontinued? "Yes" : "No" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>