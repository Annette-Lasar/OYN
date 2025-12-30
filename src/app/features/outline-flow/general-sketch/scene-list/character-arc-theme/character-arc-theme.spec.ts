import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterArcTheme } from './character-arc-theme';

describe('CharacterArcTheme', () => {
  let component: CharacterArcTheme;
  let fixture: ComponentFixture<CharacterArcTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterArcTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterArcTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
