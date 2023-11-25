
<template>
    <div class="title">
        <h2>LISTA DE USUARIOS</h2>
    </div>
    <div class="btn_crear">
        <v-btn color="black">Añadir</v-btn>
    </div>
    <div class="contenido">
   
    <v-table height="500px" fixed-header>
      <thead>
        <tr>
            <th class="text-center">
            USERNAME
          </th>
          <th class="text-center">
            EMAIL
          </th>
          <th class="text-center">
            FECHA DE CREACION
          </th>
          <th class="text-center">
            NOMBRE
          </th>
          <th class="text-center">
            APELLIDO
          </th>
          <th class="text-center">
            EDAD
          </th>
          <th class="text-center">
            CUMPLEAÑOS
          </th>
          <th class="text-center">
            ROLES IDs
          </th>
          <th class="text-center">
            BOTONES
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="usuario in usuarios"
          :key="usuario.id"
        >
          <td>{{ usuario.username }}</td>
          <td>{{  usuario.email }}</td>
          <td>{{  usuario.created_at }}</td>
          <td>{{  usuario.first_name }}</td>
          <td>{{  usuario.last_name }}</td>
          <td>{{  usuario.age }}</td>
          <td>{{  usuario.birth_day }}</td>
          <td>{{  usuario.rolesIds }}</td>
          <td> <v-btn color="blue">Actualizar</v-btn>
                <v-btn color="red">Eliminar</v-btn>
            </td>
         
        </tr>
      </tbody>
    </v-table>
    </div>
   
  </template>
  
<script>
import UserService from '@/service/UserService';
export default{
    name : 'UserCrud',
    data(){
        return{
            usuarios : null
        }
    },
    UserService : null,
    created() {
        this.UserService = new UserService();
    },
    mounted(){
        this.UserService.getAll().then(data =>{
            this.usuarios = data.data;
        })
    }
}

</script>

<style>
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
  }
  .btn_crear{
    margin-left: 100px;
  }
  .contenido {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 50px;
  }

  .contenido button{
    width: 100px;
    font-size: 10px;
  }
</style>