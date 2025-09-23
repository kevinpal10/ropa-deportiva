import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProductoFormComponent } from './nuevo-producto-form.component';

describe('NuevoProductoFormComponent', () => {
  let component: NuevoProductoFormComponent;
  let fixture: ComponentFixture<NuevoProductoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoProductoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
