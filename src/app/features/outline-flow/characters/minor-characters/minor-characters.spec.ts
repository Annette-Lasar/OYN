import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorCharacters } from './minor-characters';

describe('MinorCharacters', () => {
  let component: MinorCharacters;
  let fixture: ComponentFixture<MinorCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinorCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorCharacters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
