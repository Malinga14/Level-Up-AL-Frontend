import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPathComponent } from './paper-path.component';

describe('PaperPathComponent', () => {
  let component: PaperPathComponent;
  let fixture: ComponentFixture<PaperPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
