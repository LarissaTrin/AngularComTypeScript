import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipagemComponent } from './tipagem.component';

describe('TipagemComponent', () => {
  let component: TipagemComponent;
  let fixture: ComponentFixture<TipagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
