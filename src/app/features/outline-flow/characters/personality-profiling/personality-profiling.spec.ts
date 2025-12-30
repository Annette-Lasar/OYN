import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityProfiling } from './personality-profiling';

describe('PersonalityProfiling', () => {
  let component: PersonalityProfiling;
  let fixture: ComponentFixture<PersonalityProfiling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalityProfiling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityProfiling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
