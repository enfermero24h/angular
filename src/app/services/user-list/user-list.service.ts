import { Injectable } from '@angular/core';

export  interface User{
  id:number;
  nombre: string;
  direccion: string;
  email: string;
  foto: string; // url s3
}

@Injectable({
  providedIn: 'root'
})


/*
Crear un componente Angular llamado &quot;UserList&quot; que muestre una lista de
usuarios. Cada usuario debe tener un nombre, una dirección de correo electrónico y una foto de
perfil. Los datos de los usuarios se pueden almacenar en un arreglo en el componente o cargarlos
desde una API (se debe simular la carga de datos).
*/
export class UserListService {

  constructor() { }
  private users: User[] = [];
  private nextId=1;

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    user.id = this.nextId++;
    this.users.push(user);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1){
      this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
