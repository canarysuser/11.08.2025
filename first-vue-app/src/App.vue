<script setup>
import { onMounted } from 'vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import LIfecycleHook from './components/LIfecycleHook.vue';
import ProductSampleComponent from './components/ProductSampleComponent.vue';
import ProductHome from './features/products/ProductHome.vue';

onMounted(async ()=>{
    var response = await fetch("/products.json"); 
    var data = await response.json(); 
    console.log(data.products);
})


</script>

<template>
  <HeaderComponent/>
  <!-- <HomeComponent/> -->
   <!-- <ProductSampleComponent/> -->
    <LIfecycleHook/>
    <ProductHome/>
  <FooterComponent/>
</template>

<style scoped></style>
