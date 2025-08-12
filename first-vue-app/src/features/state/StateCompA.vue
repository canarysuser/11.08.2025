<script setup>
import { inject } from 'vue';
import { store } from './custom-store-config';

var store2 = inject("counter")
var user=inject('user');
</script>
<template>
    <div class="border border-danger p-2">
        <h6>Welcome {{ user.username }} - {{ user.designation }}</h6>
        <div>
       <p class="lead"> Custom Store Component <b>A</b> : 
        <span class="display-6"> {{ store.count }}</span></p>
        <button class="btn btn-danger mx-2" @click="store.increment">Increment</button>
        <button class="btn btn-warning" @click="store.decrement">Decrement</button>
        </div>
        <div>
            <p class="lead"> Injected Store Component <b>A</b> : 
        <span class="display-6"> {{ store2.count }} - Hits: {{  store2.noOfHits }}</span></p>
        <button class="btn btn-danger mx-2" @click="store2.increment">Increment</button>
        <button class="btn btn-warning" @click=" store2.decrement">Decrement</button>
        </div>
    </div>
</template>