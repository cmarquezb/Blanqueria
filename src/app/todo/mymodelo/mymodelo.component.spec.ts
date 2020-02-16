import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodeloComponent } from './mymodelo.component';

describe('MymodeloComponent', () => {
  let component: MymodeloComponent;
  let fixture: ComponentFixture<MymodeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymodeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
