import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriInterfaceComponent } from './ori-interface.component';

describe('OriInterfaceComponent', () => {
  let component: OriInterfaceComponent;
  let fixture: ComponentFixture<OriInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
