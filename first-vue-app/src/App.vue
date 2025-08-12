<script setup>
import { onMounted, reactive, ref } from 'vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './features/state/custom-store-config2';
import { provide } from 'vue';

onMounted(async ()=>{
    // var response = await fetch("/products.json"); 
    // var data = await response.json(); 
    // console.log(data.products);
})
var user = ref({username:'admin', designation:'PM'});

provide('counter', store);
provide('user', user);
// window.localStorage.setItem('user', JSON.stringify(user.value));
// window.sessionStorage.setItem('counter', JSON.stringify(store))
</script>

<template>
  <HeaderComponent/>
  <p class="display-1 text-danger">{{ store.count }} - Hits {{ store.noOfHits }}</p>
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