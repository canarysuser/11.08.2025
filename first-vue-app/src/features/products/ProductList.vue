<script setup>
    const props=defineProps(['list'])
    const emits = defineEmits(["view", "create", "update", "delete"])

   function selectItem(productId) { 
    console.log('product list', productId);
    emits("view", productId);
   }

</script>

<template>
<div class="card shadow m-auto mt-5 mx-5">
    <div class="card-header bg-info  p-2 d-flex ">
        <div class="text-center flex-grow-1">
        Product List
        </div>
        <button class="btn btn-warning" @click="emits('create')">Create</button>
    </div>
    <div class="card-body mb-5">
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr><th>Name</th><th>Price</th><th></th></tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in list" :key="key" >
                    <td>{{ item.productName }}</td>
                    <td>{{ item.unitPrice }}</td>
                    <td>
                        <button @click="selectItem(item.productId)" 
                            class="btn btn-sm btn-secondary">View</button>
                            <button @click="emits('update',item.productId)" 
                            class="btn btn-sm btn-success">Edit</button>
                            <button @click="emits('delete',item.productId)" 
                            class="btn btn-sm btn-danger">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
