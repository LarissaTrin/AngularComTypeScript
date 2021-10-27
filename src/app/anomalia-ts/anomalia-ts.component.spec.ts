import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliaTSComponent } from './anomalia-ts.component';

describe('AnomaliaTSComponent', () => {
  let component: AnomaliaTSComponent;
  let fixture: ComponentFixture<AnomaliaTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnomaliaTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomaliaTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
