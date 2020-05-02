import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbillComponent } from './editbill.component';

describe('EditbillComponent', () => {
  let component: EditbillComponent;
  let fixture: ComponentFixture<EditbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
