import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamodulotrabajoComponent } from './listamodulotrabajo.component';

describe('ListamodulotrabajoComponent', () => {
  let component: ListamodulotrabajoComponent;
  let fixture: ComponentFixture<ListamodulotrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamodulotrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamodulotrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
