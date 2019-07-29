import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareFeetAndMetersComponent } from './square-feet-and-meters.component';

describe('SquareFeetAndMetersComponent', () => {
  let component: SquareFeetAndMetersComponent;
  let fixture: ComponentFixture<SquareFeetAndMetersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareFeetAndMetersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareFeetAndMetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
