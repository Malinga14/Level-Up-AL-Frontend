import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageBodyComponent } from './profile-page-body.component';

describe('ProfilePageBodyComponent', () => {
  let component: ProfilePageBodyComponent;
  let fixture: ComponentFixture<ProfilePageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePageBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
