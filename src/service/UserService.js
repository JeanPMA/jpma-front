import axios from 'axios';

export default class UserService{

    url = "http://localhost:8080/v1/usuarios?detailed=true"

    getAll(){

        return axios.get(this.url)
    }
}