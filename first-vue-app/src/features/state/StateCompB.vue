<script setup>
import { inject } from 'vue';
import { store } from './custom-store-config';
var user = inject("user")
</script>
<template>
    <div class="border border-primary p-2">
         <h6>Welcome {{ user.username }} - {{ user.designation }}</h6>
       <p class="lead"> Store Component <b>B</b> : </p>
        <span class="display-3"> {{ store.count }}</span>
        <hr/>
         <button class="btn btn-success mx-2" @click="store.increment">Increment</button>
        <button class="btn btn-info" @click="store.decrement">Decrement</button>
    </div>
</template>