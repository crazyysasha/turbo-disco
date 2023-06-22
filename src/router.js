import { createRouter,createMemoryHistory, createWebHistory } from "vue-router";
import ChatView from "./views"

export default createRouter ({
    history: createWebHistory (), 
    routes: [
        { path: 'chat', views:ChatView}
        
    ]
})
