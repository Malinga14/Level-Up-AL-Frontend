import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPaperBodyComponent } from './past-paper-body.component';

describe('PastPaperBodyComponent', () => {
  let component: PastPaperBodyComponent;
  let fixture: ComponentFixture<PastPaperBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastPaperBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPaperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
