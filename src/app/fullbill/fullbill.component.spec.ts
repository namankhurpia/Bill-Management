import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullbillComponent } from './fullbill.component';

describe('FullbillComponent', () => {
  let component: FullbillComponent;
  let fixture: ComponentFixture<FullbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
