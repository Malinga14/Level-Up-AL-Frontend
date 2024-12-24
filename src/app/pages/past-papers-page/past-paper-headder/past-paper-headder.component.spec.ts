import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPaperHeadderComponent } from './past-paper-headder.component';

describe('PastPaperHeadderComponent', () => {
  let component: PastPaperHeadderComponent;
  let fixture: ComponentFixture<PastPaperHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastPaperHeadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPaperHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
