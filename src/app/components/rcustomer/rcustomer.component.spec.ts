import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcustomerComponent } from './rcustomer.component';

describe('RcustomerComponent', () => {
  let component: RcustomerComponent;
  let fixture: ComponentFixture<RcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
