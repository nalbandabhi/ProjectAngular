import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRegistrationComponent } from './bill-registration.component';

describe('BillRegistrationComponent', () => {
  let component: BillRegistrationComponent;
  let fixture: ComponentFixture<BillRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
