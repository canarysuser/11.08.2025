<script setup>
import { useCounterStore } from './pinia-store-config';


var store=useCounterStore()

</script>
<template>

<div style="background-color: lightgoldenrodyellow;" class="m-5 p-2">
    <p class="display-6">
        Pinia Store: <br/>
        Counter: {{ store.$state.counter }} - Hits: {{ store.$state.hits }}
    </p>
    <div class="btn-group btn-group-sm">
        <button class="btn btn-success" @click="store.increment"> +1 </button>
        <button class="btn btn-danger" @click="store.decrement"> -1 </button>
        <button class="btn btn-dark" @click="store.add(5)"> +5 </button>
    </div>
</div>

</template>