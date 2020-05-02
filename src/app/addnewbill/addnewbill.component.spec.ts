import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbillComponent } from './addnewbill.component';

describe('AddnewbillComponent', () => {
  let component: AddnewbillComponent;
  let fixture: ComponentFixture<AddnewbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
