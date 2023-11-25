<script>
import axios from 'axios';

export default{
    name: "UserCreate",
    data(){
        return{
            model: {
                user: {
                    username: '',
                    password: '',
                    email: '',
                    created_at: '',
                    first_name: '',
                    last_name: '',
                    age: '',
                    birth_day: '',
                }
            }
        }
    },
    methods: {
    saveUser(){
        axios.post('http://localhost:8080/v1/usuarios', this.model.user)
            .then(res =>{
                alert('Usuario creado ');
                this.model.student = {
                    username: '',
                    password: '',
                    email: '',
                    created_at: '',
                    first_name: '',
                    last_name: '',
                    age: '',
                    birth_day: ''
                }
                console.log(res); 
            }).catch(function (error){
                console.log(error);
            })
    }
}
}
</script>

<template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="model.user.username"
          type="text"
          label="username"
        ></v-text-field>
  
        <v-text-field
          v-model="model.user.password"
          type="password"
          label="password"
        ></v-text-field>

        <v-text-field
          v-model="model.user.email"
          type="email"
          label="email"
        ></v-text-field>

        <v-text-field
          v-model="model.user.created_at"
          type="datetime-local"
          label="created_at"
        ></v-text-field>

        <v-text-field
          v-model="model.user.first_name"
          type="text"
          label="first_name"
        ></v-text-field>

        <v-text-field
          v-model="model.user.last_name"
          type="text"
          label="last_name"
        ></v-text-field>

        <v-text-field
          v-model="model.user.age"
          type="number"
          label="age"
        ></v-text-field>

        <v-text-field
          v-model="model.user.birth_day"
          type="date"
          label="birth_day"
        ></v-text-field>
  
        <v-btn type="submit" @click="saveUser" block class="mt-2">Crear</v-btn>
        <router-link to="/">
            <v-btn type="submit" block class="mt-2">Cancelar</v-btn>
       </router-link>
        
      </v-form>
    </v-sheet>
  </template>