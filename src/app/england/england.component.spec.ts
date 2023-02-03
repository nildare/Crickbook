import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglandComponent } from './england.component';

describe('EnglandComponent', () => {
  let component: EnglandComponent;
  let fixture: ComponentFixture<EnglandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
