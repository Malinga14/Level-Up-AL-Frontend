import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPapersPageComponent } from './past-papers-page.component';

describe('PastPapersPageComponent', () => {
  let component: PastPapersPageComponent;
  let fixture: ComponentFixture<PastPapersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastPapersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPapersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
