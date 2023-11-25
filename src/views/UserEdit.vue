<script>
import axios from "axios";

export default {
  name: "UserEdit",
  data() {
    return {
      userId: '',
      model: {
        user: {
            username: '',
            password: '',
            email: '',
            created_at: '',
            first_name: '',
            last_name: '',
            age: '',
            birth_day: ''
        }
      }
    }
  },
  methods: {
    getUserById(userId) {
      axios.get(`http://localhost:8080/v1/usuarios/${userId}`).then(res => {
        this.model.user = res.data;
      }).catch(function (error) {
        console.log(error);
      })
    },
    editUser() {
      axios.put(`http://localhost:8080/v1/usuarios/${this.userId}`, this.model.user)
          .then(res => {
            alert('Usuario fue editado exitosamente');
            console.log(res);
          }).catch(function (error) {
            console.log(error);
      })
    },
    formatearFecha(fechaOriginal) {
      const fechaObjeto = new Date(fechaOriginal);
      const formatoDeseado = `${fechaObjeto.getFullYear()}-${String(fechaObjeto.getMonth() + 1).padStart(2, '0')}-${String(fechaObjeto.getDate()).padStart(2, '0')}T${String(fechaObjeto.getHours()).padStart(2, '0')}:${String(fechaObjeto.getMinutes()).padStart(2, '0')}`;
      return formatoDeseado;
    }
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getUserById(this.userId);
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
  
        <v-btn type="submit" @click="editUser" block class="mt-2">Editar</v-btn>
        <router-link to="/">
            <v-btn type="submit" block class="mt-2">Cancelar</v-btn>
       </router-link>
        
      </v-form>
    </v-sheet>
</template>