import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneChecklist } from './scene-checklist';

describe('SceneChecklist', () => {
  let component: SceneChecklist;
  let fixture: ComponentFixture<SceneChecklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceneChecklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceneChecklist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
