import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryElements } from './story-elements';

describe('StoryElements', () => {
  let component: StoryElements;
  let fixture: ComponentFixture<StoryElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryElements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
