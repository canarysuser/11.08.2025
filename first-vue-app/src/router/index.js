import HomeComponent from "@/components/HomeComponent.vue";
import LIfecycleHook from "@/components/LIfecycleHook.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import ProductHome from "@/features/products/ProductHome.vue";
import RoutedDetails from "@/features/routed/RoutedDetails.vue";
import RoutedEdit from "@/features/routed/RoutedEdit.vue";
import RoutedList from "@/features/routed/RoutedList.vue";
import RoutedNew from "@/features/routed/RoutedNew.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path:'/home', name:'homepage', component: HomeComponent}, 
    { path:'/products', name:'producthome', component: ProductHome},
    {   
        path: '/routed', 
        children: [
            {path: 'list', name:'routedlist', component: RoutedList},
            {path: 'details/:id', name:'routeddetails', component: RoutedDetails},
            {path: 'createnew',  name: 'routednew', component: RoutedNew},
            {path: 'edit/:id', name: 'routededit', component: RoutedEdit}
        ]
    },
    { path:'/lifecycle', name:'lifecycle', 
            component: ()=>import("../components/LIfecycleHook.vue")},
            
    { path:'/', redirect: {name: 'homepage'}}, 
    { path: '/:pathMatch(.*)*', name:'notfound', component: NotFoundComponent}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes: routes
})

export default router;