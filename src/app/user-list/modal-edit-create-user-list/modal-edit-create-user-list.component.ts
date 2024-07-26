import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../services/user-list/user-list.service';

@Component({
  selector: 'app-modal-edit-create-user-list',
  standalone: true,
  imports: [],
  templateUrl: './modal-edit-create-user-list.component.html',
  styleUrl: './modal-edit-create-user-list.component.css'
})
export class ModalEditCreateUserListComponent {
  @Input() user: User = { id: 0, nombre: '', direccion: '', email: '', foto: '' };
  @Input() showModal: boolean = false;
  @Output() saveUser = new EventEmitter<User>();
  @Output() cancelEdit = new EventEmitter<void>();

  onInputChange(property: keyof User, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.user = { ...this.user, [property]: inputElement.value };
  }

  onSave() {
    this.saveUser.emit(this.user);
  }

  onCancel() {
    this.cancelEdit.emit();
  }
}