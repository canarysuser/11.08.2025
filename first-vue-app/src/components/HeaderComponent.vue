<template>
<nav class="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" :to="{ path:'/'}">First Vue App</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" 
            :to="{name:'homepage'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'producthome'}">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'lifecycle'}">Lifecycle</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" :to="{name:'routedlist'}">Routed Products</router-link>
        </li>
         <li class="nav-item">
          <router-link class="nav-link" :to="{name:'customstate'}">Custom State</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
</style>