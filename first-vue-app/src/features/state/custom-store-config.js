import { reactive } from "vue";


export const store = reactive({
    /* state */
    count: 0,
    /* action methods */ 
    increment() { 
        this.count=this.count + 1;
    }, 
    decrement() { 
        this.count=this.count - 1;
    }
})