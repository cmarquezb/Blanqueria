import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToallasComponent } from './toallas.component';

describe('ToallasComponent', () => {
  let component: ToallasComponent;
  let fixture: ComponentFixture<ToallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
