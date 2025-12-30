import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingQuestions } from './setting-questions';

describe('SettingQuestions', () => {
  let component: SettingQuestions;
  let fixture: ComponentFixture<SettingQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingQuestions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
