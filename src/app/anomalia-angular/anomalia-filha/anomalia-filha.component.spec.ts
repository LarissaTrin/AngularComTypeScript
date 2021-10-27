import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliaFilhaComponent } from './anomalia-filha.component';

describe('AnomaliaFilhaComponent', () => {
  let component: AnomaliaFilhaComponent;
  let fixture: ComponentFixture<AnomaliaFilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnomaliaFilhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomaliaFilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
