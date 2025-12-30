import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryStructure } from './story-structure';

describe('StoryStructure', () => {
  let component: StoryStructure;
  let fixture: ComponentFixture<StoryStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryStructure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
