import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSentencePremise } from './two-sentence-premise';

describe('TwoSentencePremise', () => {
  let component: TwoSentencePremise;
  let fixture: ComponentFixture<TwoSentencePremise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoSentencePremise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoSentencePremise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
