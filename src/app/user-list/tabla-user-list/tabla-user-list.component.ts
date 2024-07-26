import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../services/user-list/user-list.service';

@Component({
  selector: 'app-tabla-user-list',
  standalone: true,
  imports: [],
  templateUrl: './tabla-user-list.component.html',
  styleUrl: './tabla-user-list.component.css'
})
export class TablaUserListComponent {
  @Input() users: User[] = [];
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<User>();

  onEdit(user: User) {
    this.editUser.emit(user);
  }

  onDelete(user: User) {
    this.deleteUser.emit(user);
  }
}
