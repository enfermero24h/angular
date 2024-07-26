import { Component, OnInit } from '@angular/core';
import { User, UserListService } from '../services/user-list/user-list.service';
import { ModalEditCreateUserListComponent } from "./modal-edit-create-user-list/modal-edit-create-user-list.component";
import { TablaUserListComponent } from "./tabla-user-list/tabla-user-list.component";
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TablaUserListComponent, ModalEditCreateUserListComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {
  
public verModal: boolean = false;
users: User[] = [];
newUser: User = {id:0, nombre:'', direccion:'', email:'',foto:''}; // declaraccion inicial 
editUser: User | null = null;


constructor(private userListService: UserListService) { }
  ngOnInit(): void {
    
  }

  loadUsers() {
    this.users = this.userListService.getUsers();
  }

  addUser(){
    this.userListService.addUser(this.newUser);
    this.newUser = {id:0, nombre:'', direccion:'', email:'',foto:''};
  }

  editUserList(user: User) {
    this.editUser = { ...user };
  }

  updateUser() {
    if (this.editUser) {
      this.userListService.updateUser(this.editUser);
      this.editUser=null;
      this.loadUsers(); // cargamos de nuevo los usuarios
    }
  }

  deleteUser(user: User) {
    this.userListService.deleteUser(user.id);
    this.loadUsers(); // cargamos de nuevo los usuarios
  }

  cancelEdit() {
    this.editUser=null;
  }


}
