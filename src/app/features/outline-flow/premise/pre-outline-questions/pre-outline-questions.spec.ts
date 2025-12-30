import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOutlineQuestions } from './pre-outline-questions';

describe('PreOutlineQuestions', () => {
  let component: PreOutlineQuestions;
  let fixture: ComponentFixture<PreOutlineQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOutlineQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOutlineQuestions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
