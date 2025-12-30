import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySummary } from './story-summary';

describe('StorySummary', () => {
  let component: StorySummary;
  let fixture: ComponentFixture<StorySummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorySummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
