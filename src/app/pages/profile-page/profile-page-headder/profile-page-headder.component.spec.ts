import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeadderComponent } from './profile-page-headder.component';

describe('ProfilePageHeadderComponent', () => {
  let component: ProfilePageHeadderComponent;
  let fixture: ComponentFixture<ProfilePageHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePageHeadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePageHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
