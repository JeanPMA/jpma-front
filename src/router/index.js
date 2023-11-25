import { createRouter, createWebHistory } from 'vue-router'
import UserCrud from "@/views/UserCrud.vue";
import UserCreate from "@/views/UserCreate.vue";
import UserEdit from "@/views/UserEdit";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',    
      name: 'home',
      component: UserCrud
    },
   
    {
      path: '/usuario/create',
      name: 'crear',    
      component: UserCreate
    },

    {
      path: '/usuario/:id/edit',
      name: 'actualizar',
      component: UserEdit
      },

      {
        path: '/usuario/:id/delete',
        name: 'eliminar',
        component: UserCreate
      },
   
  ]
})

export default router