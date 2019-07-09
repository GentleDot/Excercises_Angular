import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrCntComponent } from './str-cnt.component';

describe('StrCntComponent', () => {
  let component: StrCntComponent;
  let fixture: ComponentFixture<StrCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
