import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuizquierdoComponent } from './menuizquierdo.component';

describe('MenuizquierdoComponent', () => {
  let component: MenuizquierdoComponent;
  let fixture: ComponentFixture<MenuizquierdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuizquierdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuizquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
