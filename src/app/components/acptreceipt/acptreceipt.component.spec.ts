import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcptreceiptComponent } from './acptreceipt.component';

describe('AcptreceiptComponent', () => {
  let component: AcptreceiptComponent;
  let fixture: ComponentFixture<AcptreceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcptreceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcptreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
