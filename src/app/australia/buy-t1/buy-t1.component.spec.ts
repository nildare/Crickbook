import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyT1Component } from './buy-t1.component';

describe('BuyT1Component', () => {
  let component: BuyT1Component;
  let fixture: ComponentFixture<BuyT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyT1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
