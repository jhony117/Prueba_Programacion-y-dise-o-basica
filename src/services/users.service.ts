import { Injectable } from '@angular/core';
import axios from 'axios';
import { Usuarios } from '../interfaces/user.interface';


@Injectable({providedIn: 'root'})
export class UserService {


  constructor() {}



private url = 'http://localhost:3000';




async getUsers(): Promise<Usuarios[]> {
  try {
    const response = await axios.get(`${this.url}/usuarios`);
    return response.data; // Devuelve el arreglo de usuarios
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener datos: " + error);
  }
}

async delUser(id :number) {
  try {
   const response = await axios.delete(`${this.url}/usuarios/${id}`);
   console.log(response.data);
   return response.data;
  } catch (e) {
  console.log(e);
  throw new Error("Error al obtener datos: " + e);
  }
}



}








//
