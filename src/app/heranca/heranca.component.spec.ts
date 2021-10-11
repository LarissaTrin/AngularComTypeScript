import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerancaComponent } from './heranca.component';

describe('HerancaComponent', () => {
  let component: HerancaComponent;
  let fixture: ComponentFixture<HerancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
