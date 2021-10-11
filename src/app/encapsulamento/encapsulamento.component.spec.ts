import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulamentoComponent } from './encapsulamento.component';

describe('EncapsulamentoComponent', () => {
  let component: EncapsulamentoComponent;
  let fixture: ComponentFixture<EncapsulamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncapsulamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
