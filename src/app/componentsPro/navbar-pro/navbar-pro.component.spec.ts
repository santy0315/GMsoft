import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProComponent } from './navbar-pro.component';

describe('NavbarProComponent', () => {
  let component: NavbarProComponent;
  let fixture: ComponentFixture<NavbarProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
