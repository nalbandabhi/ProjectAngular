import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptbillComponent } from './receiptbill.component';

describe('ReceiptbillComponent', () => {
  let component: ReceiptbillComponent;
  let fixture: ComponentFixture<ReceiptbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
