import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsClassComponent } from './abs-class.component';

describe('AbsClassComponent', () => {
  let component: AbsClassComponent;
  let fixture: ComponentFixture<AbsClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
