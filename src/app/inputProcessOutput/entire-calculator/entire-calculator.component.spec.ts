import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireCalculatorComponent } from './entire-calculator.component';

describe('EntireCalculatorComponent', () => {
  let component: EntireCalculatorComponent;
  let fixture: ComponentFixture<EntireCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntireCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
