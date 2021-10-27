import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliaAngularComponent } from './anomalia-angular.component';

describe('AnomaliaAngularComponent', () => {
  let component: AnomaliaAngularComponent;
  let fixture: ComponentFixture<AnomaliaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnomaliaAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomaliaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
