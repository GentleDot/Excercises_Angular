import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeCharacterComponent } from './escape-character.component';

describe('EscapeCharacterComponent', () => {
  let component: EscapeCharacterComponent;
  let fixture: ComponentFixture<EscapeCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
