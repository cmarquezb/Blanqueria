import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymarcaComponent } from './mymarca.component';

describe('MymarcaComponent', () => {
  let component: MymarcaComponent;
  let fixture: ComponentFixture<MymarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
