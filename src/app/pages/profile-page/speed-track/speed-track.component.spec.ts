import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedTrackComponent } from './speed-track.component';

describe('SpeedTrackComponent', () => {
  let component: SpeedTrackComponent;
  let fixture: ComponentFixture<SpeedTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
