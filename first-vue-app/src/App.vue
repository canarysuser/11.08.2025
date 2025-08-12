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
    <!-- <LIfecycleHook/>
    <ProductHome/> -->
   <router-view v-slot="{Component}">
    <transition name="slide">
      <component :is="Component"/>
    </transition>
   </router-view>
<!-- <router-view></router-view> -->
  <FooterComponent/>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active,
.fade-enter-active, .fade-leave-active {
  transition: transform 1s ease;
}
.slide-enter-from 
{
  transform: translateX(100%);
}
.slide-leave-to { 
  transform: translateX(100%);
}
.fade-enter-from, .fade-leave-to { 
  opacity: 0
}
</style>