<script setup>
import { ref } from 'vue';
import SimpleComponent from './SimpleComponent.vue';
import { reactive } from 'vue';
import { computed } from 'vue';

let item1 = "Item 1";

var counter = ref(0) //reactive state of the component 
var anotherVar = reactive({count:0}); 
// anotherVar = {count:0}; //NOT ALLOWED
// anotherVar.count
/*
LImitations: LImited value types - works for object, arrays and collection 
        - cannot be used with primitive types like string, number, boolean.
        - cannot replace the entire object 
            -> reactive keeps a reference to the initial object 
        - Not Destructure friendly 
            -> destructure the reactive object's primitive type into a local variable, 
                the reactivity connection is lost 

let {count} = {...anotherVar}; 
myFunc(anotherVar.count); 

recommended API for reactive state management is ref();
Ref- can hold any value, type, including deeply nested objects, arrays, JS-maps 
    - value is deeply reactive 
*/
var css = ref("alert alert-success");
function increment(value, e) {
    e.preventDefault(); 
    if(typeof(value) !== 'number') return; 

    counter.value=counter.value + value;
    anotherVar.count++;
    css.value="alert alert-danger"
}
var divAttrs = {
    id:'container1', 
    class:'card shadow m-auto w-75 h-50', 
    style:'background-color:green'
}
var isEven = computed(()=>{
    return counter.value % 4==0;
})
var isMultiple = computed(()=>{
    return (counter.value % 3) == 0;
})

var list = ref(["Item 1", "Item 2", "Item 3", "Item 4"]); 
</script>

<template>
    <div v-bind="divAttrs">Some content</div>
  <p>
   Simple app {{ item1 }}
  </p>
  <div class="my-4 py-5 border border-1" :class="css">
    <h6>Reactive State of counter: {{  counter }}</h6>
    <button class="btn btn-lg btn-outline-dark" @click="increment(5,$event)" >Click Me</button>
    <input type="text" :value="css" @change="(e)=>css=e.target.value"/>
  </div>
  <SimpleComponent></SimpleComponent>
  <div v-if="isEven" class="bg-warning w-50" > Even Number</div>
  <div v-else-if="isMultiple">{{ counter }} is a multiple of 3</div>
  <div v-else class="bg-success w-50"> Odd Number</div>
  <!-- 
    <div if>
        OR 
    <div else-if> 
        OR
    <div else>
   -->

  <div v-show="isEven">Show is event</div> 
  <div v-show="!isEven">Show is odd</div>
  <!-- 
    <div style='display:none'>..</div> 
    <div style='display:block'>..</div> 
   -->

  <div class="card shadow bg-secondary w-50 m-auto">
    <ul>
        <li v-for="(value, index) in list" v-if="list.length<5">
           {{ index+1 }}. {{ value }}
        </li>
        <li v-else>No items</li>
    </ul>
  </div>

</template>