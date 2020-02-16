import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadasComponent } from './almohadas.component';

describe('AlmohadasComponent', () => {
  let component: AlmohadasComponent;
  let fixture: ComponentFixture<AlmohadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmohadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
