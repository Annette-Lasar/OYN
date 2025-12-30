import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikableCharacterChecklist } from './likable-character-checklist';

describe('LikableCharacterChecklist', () => {
  let component: LikableCharacterChecklist;
  let fixture: ComponentFixture<LikableCharacterChecklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikableCharacterChecklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikableCharacterChecklist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
