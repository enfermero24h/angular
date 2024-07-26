import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCreateUserListComponent } from './modal-edit-create-user-list.component';

describe('ModalEditCreateUserListComponent', () => {
  let component: ModalEditCreateUserListComponent;
  let fixture: ComponentFixture<ModalEditCreateUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditCreateUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditCreateUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
