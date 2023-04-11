import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerLoginComponent } from './biller-login.component';

describe('BillerLoginComponent', () => {
  let component: BillerLoginComponent;
  let fixture: ComponentFixture<BillerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
