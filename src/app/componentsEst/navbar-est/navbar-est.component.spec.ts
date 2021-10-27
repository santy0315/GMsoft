import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEstComponent } from './navbar-est.component';

describe('NavbarEstComponent', () => {
  let component: NavbarEstComponent;
  let fixture: ComponentFixture<NavbarEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
