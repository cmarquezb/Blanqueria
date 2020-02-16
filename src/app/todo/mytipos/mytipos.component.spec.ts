import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytiposComponent } from './mytipos.component';

describe('MytiposComponent', () => {
  let component: MytiposComponent;
  let fixture: ComponentFixture<MytiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
