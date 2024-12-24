import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFootterComponent } from './about-us-footter.component';

describe('AboutUsFootterComponent', () => {
  let component: AboutUsFootterComponent;
  let fixture: ComponentFixture<AboutUsFootterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsFootterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsFootterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
