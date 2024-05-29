import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMisterComponent } from './login-mister.component';

describe('LoginMisterComponent', () => {
  let component: LoginMisterComponent;
  let fixture: ComponentFixture<LoginMisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginMisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginMisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
