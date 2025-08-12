<script setup>
import { useCounterStore } from './pinia-store-config';
import PiniaStateComp from './PiniaStateComp.vue';
import StateCompA from './StateCompA.vue';
import StateCompB from './StateCompB.vue';

const store = useCounterStore(); 

</script>
<template>
    <div class="container-fluid">
        <div class="row fw-bold" style="background-color: yellow;">
         <span :class="[ store.isEven ? 'text-center': 'text-right' ]">  
             Pinia Store: {{ store.counter }} Hits: {{ store.hits }}
        </span>
        </div>
    <div class="row">
        <div class="col-6">
            <StateCompA/>
        </div>
        <div class="col-6">
            <StateCompB/>
        </div>
    </div>
    <div class="row">
        <div class="offset-3 col-6">
            <PiniaStateComp />
        </div>
    </div>
    </div>
</template>