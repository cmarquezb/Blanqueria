import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubrecamasComponent } from './cubrecamas.component';

describe('CubrecamasComponent', () => {
  let component: CubrecamasComponent;
  let fixture: ComponentFixture<CubrecamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubrecamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubrecamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
