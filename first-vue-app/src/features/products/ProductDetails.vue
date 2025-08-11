<script setup>
import { onBeforeUpdate, onMounted, ref, VueElement } from 'vue';
const props = defineProps(['selectedItem', 'isReadOnly'])
var model = ref(props.selectedItem);
onBeforeUpdate(()=>{
    console.log("On Before update",props.selectedItem)
    model.value=props.selectedItem;
})
function handleChange(e) { 
    model.value[e.target.name]=e.target.value;
    console.log('HandleChange', model.value)
}
</script>

<template>
    <div class="card shadow m-auto mt-5 w-75">
        <div class="card-header bg-info  p-2 text-center">Product Details</div>
        <div class="card-body">
            <div v-if="!props.selectedItem.productId">
                <h4 class="text-danger"> No item selected {{ isReadOnly }}</h4>
            </div>
            <form v-else>
                <input type="hidden" name="productId" :value="model.productId" />
                <div class="form-group">
                    <label for="productName">Product Name</label>
                    <input type="text" class="form-control" name="productName"
                     :value="model.productName" :readonly="isReadOnly"
                     @change="handleChange" />
                </div>
                <div class="form-group">
                    <label for="unitPrice">Unit Price</label>
                    <input type="text" class="form-control" name="unitPrice" 
                    :value="selectedItem?.unitPrice" :readonly="isReadOnly" 
                    @change="handleChange" />
                </div>
                <div class="form-group">
                    <label for="unitsInStock">Units In Stock</label>
                    <input type="text" class="form-control" name="unitsInStock" :value="selectedItem?.unitsInStock"
                        :readonly="isReadOnly" 
                        @change="handleChange" />
                </div>
                <div class="form-group">
                    <label for="discontinued">Discontinued</label>
                    <input type="checkbox" class="form-checkbox" :checked="selectedItem?.discontinued"
                        :readonly="isReadOnly" @change="handleChange" />
                </div>
                <div class="form-group text-center">
                    <button v-if="!isReadOnly" class="btn btn-lg btn-success">Save</button>
                </div>
            </form>

        </div>
        <div class="card-footer bg-secondary">
            <slot name="selectedItem">
                <!-- Default content to be displayed, if the parent does not 
            fill the slot content
         -->
                Child {{ selectedItem }}
            </slot>
            <hr />
            <slot name="today"></slot>

        </div>
    </div>
</template>
