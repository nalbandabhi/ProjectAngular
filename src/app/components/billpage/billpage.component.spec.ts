import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpageComponent } from './billpage.component';

describe('BillpageComponent', () => {
  let component: BillpageComponent;
  let fixture: ComponentFixture<BillpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
