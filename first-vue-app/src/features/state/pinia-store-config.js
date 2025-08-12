import { defineStore } from "pinia";

export const useCounterStore = defineStore(
    "counterStore",
    {
        state: ()=>({
            counter: 0, 
            hits: 0
        }),
        getters: {
            isEven: (state) => state.counter%2===0 
        }, 
        actions: {
            increment() { 
                this.counter+=1;
                this.hits+=1;
            }, 
            decrement() { 
                this.counter-=1;
                this.hits+=1;
            },
            add(num) { 
                this.counter+=num;
                this.hits+=1;
            }
        }
    }
)