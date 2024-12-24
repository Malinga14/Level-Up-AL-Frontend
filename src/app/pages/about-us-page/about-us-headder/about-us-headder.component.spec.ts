import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHeadderComponent } from './about-us-headder.component';

describe('AboutUsHeadderComponent', () => {
  let component: AboutUsHeadderComponent;
  let fixture: ComponentFixture<AboutUsHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsHeadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
