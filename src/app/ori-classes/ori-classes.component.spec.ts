import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriClassesComponent } from './ori-classes.component';

describe('OriClassesComponent', () => {
  let component: OriClassesComponent;
  let fixture: ComponentFixture<OriClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
