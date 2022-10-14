import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcutalizatEmpleadoComponent } from './acutalizat-empleado.component';

describe('AcutalizatEmpleadoComponent', () => {
  let component: AcutalizatEmpleadoComponent;
  let fixture: ComponentFixture<AcutalizatEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcutalizatEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcutalizatEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
