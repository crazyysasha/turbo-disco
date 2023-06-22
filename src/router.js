import { createRouter,createMemoryHistory } from "vue-router";
import ChatViev from "./views"

export default createRouter ({
    history: createMemoryHistory (), 
    routes: [
        { path: 'chat', vievs:ChatViev}
        
    ]
})
