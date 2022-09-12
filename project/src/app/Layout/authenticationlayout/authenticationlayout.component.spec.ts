import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationlayoutComponent } from './authenticationlayout.component';

describe('AuthenticationlayoutComponent', () => {
  let component: AuthenticationlayoutComponent;
  let fixture: ComponentFixture<AuthenticationlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
