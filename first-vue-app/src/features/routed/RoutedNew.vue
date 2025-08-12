<script setup>
import { computed, reactive } from 'vue';
import { Product } from '../products/product-model';
import { useRouter } from 'vue-router';
import { ProductAPIService } from '../products/ProductAPIService';
import { useVuelidate } from "@vuelidate/core"
import { required, minLength, minValue, maxValue } from "@vuelidate/validators"

let router = useRouter();
var model = reactive(new Product(0, '', 0, 0, false));
function handleChange(e) {
    model[e.target.name] = e.target.value;
}

const rules = computed(() => ({
    productName: { required, minLength:minLength(3) },
    unitsInStock: {required, minValue: minValue(1), maxValue:maxValue(1000) }
}));

const v$ = useVuelidate(rules, model);

const priceError = computed(() => {
    if (model.unitPrice < 0) return 'Price cannot be less than 0.'
    if (model.unitPrice > 1000) return 'Price cannot be greater than 1000.'
    return '';
})

async function submit(e) {
   
    v$.value.$touch()
    if (!v$.value.$invalid) {
        var service = new ProductAPIService();
        await service.create(model);
        router.push({ name: 'routedlist' });
    }
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
                <div class="form-group" >
                    <label for="productName">Product Name</label>
                    <input type="text" class="form-control" name="productName" :value="model.productName"
                        @change="handleChange" />
                    <div class="text-danger" v-for="error of v$.productName?.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="unitPrice">Unit Price</label>
                    <input type="text" class="form-control" name="unitPrice" :value="model?.unitPrice"
                        @change="handleChange" />
                    <span v-if="priceError" class="text-danger">{{ priceError }}</span>
                </div>
                <div class="form-group">
                    <label for="unitsInStock">Units In Stock</label>
                    <input type="text" class="form-control" name="unitsInStock" :value="model?.unitsInStock"
                        @change="handleChange" />
                    <div class="text-danger" v-for="error of v$.unitsInStock?.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>    
                </div>
                <div class="form-group">
                    <label for="discontinued">Discontinued</label>
                    <input type="checkbox" class="form-checkbox" :checked="model?.discontinued"
                        @change="handleChange" />
                     
                </div>
                <div class="form-group text-center">
                    <button class="btn btn-lg btn-success">Save</button>
                </div>
            </form>
        </div>

    </div>
</template>
