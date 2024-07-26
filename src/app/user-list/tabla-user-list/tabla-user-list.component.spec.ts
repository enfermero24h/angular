import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUserListComponent } from './tabla-user-list.component';

describe('TablaUserListComponent', () => {
  let component: TablaUserListComponent;
  let fixture: ComponentFixture<TablaUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
