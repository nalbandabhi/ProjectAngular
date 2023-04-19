import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusbalanceComponent } from './cusbalance.component';

describe('CusbalanceComponent', () => {
  let component: CusbalanceComponent;
  let fixture: ComponentFixture<CusbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
