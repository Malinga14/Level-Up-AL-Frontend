import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadderComponent } from './home-headder.component';

describe('HomeHeadderComponent', () => {
  let component: HomeHeadderComponent;
  let fixture: ComponentFixture<HomeHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
