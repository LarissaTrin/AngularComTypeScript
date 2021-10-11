import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolimorfismoComponent } from './polimorfismo.component';

describe('PolimorfismoComponent', () => {
  let component: PolimorfismoComponent;
  let fixture: ComponentFixture<PolimorfismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolimorfismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolimorfismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
