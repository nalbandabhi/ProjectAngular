import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsentComponent } from './paymentsent.component';

describe('PaymentsentComponent', () => {
  let component: PaymentsentComponent;
  let fixture: ComponentFixture<PaymentsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
