import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPaperFootterComponent } from './past-paper-footter.component';

describe('PastPaperFootterComponent', () => {
  let component: PastPaperFootterComponent;
  let fixture: ComponentFixture<PastPaperFootterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastPaperFootterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPaperFootterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
