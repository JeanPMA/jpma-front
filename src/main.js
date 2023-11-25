import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import { createRouter, createWebHistory } from 'vue-router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import UserCrud from "@/views/UserCrud.vue";
import UserCreate from "@/views/UserCreate.vue";
import UserEdit from "@/views/UserEdit";


const vuetify = createVuetify({
    components,
    directives,
})

const routes = [
    {
        path:'/', component: UserCrud,
    },
    {
        path:'/usuario/create', component: UserCreate,
    },
    {
        path: '/usuario/:id/edit',  component: UserEdit
    }
   
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
