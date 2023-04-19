import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerbalanceComponent } from './billerbalance.component';

describe('BillerbalanceComponent', () => {
  let component: BillerbalanceComponent;
  let fixture: ComponentFixture<BillerbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillerbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillerbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
