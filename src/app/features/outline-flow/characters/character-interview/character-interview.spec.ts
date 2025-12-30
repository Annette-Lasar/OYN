import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterview } from './character-interview';

describe('CharacterInterview', () => {
  let component: CharacterInterview;
  let fixture: ComponentFixture<CharacterInterview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterInterview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInterview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
