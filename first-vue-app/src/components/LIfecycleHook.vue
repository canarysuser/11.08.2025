<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

    
    var counter=ref(0); 
    function increment() { counter.value+=1;}
    console.log('setup done')
    onMounted(()=>{
        console.log('On Mounted')
    })
    onBeforeMount(()=>{
        console.log('On Before Mount')
    })
    onBeforeUpdate(()=>{
        console.log('On Before Update')
    })
    onUpdated(()=>{
        console.log('On Updated')
    })
    onBeforeUnmount(()=>{
        console.log("On Before Unmount")
    })
    onUnmounted(()=>{
        console.log("On Unmount")
    })
</script>

<template>
<h3>
    Lifecycle Hooks
</h3>
<p> Counter is {{ counter }}</p>
<button @click="increment" class="btn btn-lg btn-dark">Click ME</button>

</template>