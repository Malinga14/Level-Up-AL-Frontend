import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFootterComponent } from './home-footter.component';

describe('HomeFootterComponent', () => {
  let component: HomeFootterComponent;
  let fixture: ComponentFixture<HomeFootterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFootterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFootterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
