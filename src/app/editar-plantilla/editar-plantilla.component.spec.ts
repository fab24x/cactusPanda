import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlantillaComponent } from './editar-plantilla.component';

describe('EditarPlantillaComponent', () => {
  let component: EditarPlantillaComponent;
  let fixture: ComponentFixture<EditarPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPlantillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
