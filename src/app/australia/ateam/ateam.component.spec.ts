import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteamComponent } from './ateam.component';

describe('AteamComponent', () => {
  let component: AteamComponent;
  let fixture: ComponentFixture<AteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
