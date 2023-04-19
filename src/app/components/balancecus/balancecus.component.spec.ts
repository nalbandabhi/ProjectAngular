import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancecusComponent } from './balancecus.component';

describe('BalancecusComponent', () => {
  let component: BalancecusComponent;
  let fixture: ComponentFixture<BalancecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancecusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
