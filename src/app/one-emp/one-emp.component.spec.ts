import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEmpComponent } from './one-emp.component';

describe('OneEmpComponent', () => {
  let component: OneEmpComponent;
  let fixture: ComponentFixture<OneEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
