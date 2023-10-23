import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPrendasComponent } from './categoria-prendas.component';

describe('CategoriaPrendasComponent', () => {
  let component: CategoriaPrendasComponent;
  let fixture: ComponentFixture<CategoriaPrendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaPrendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaPrendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
