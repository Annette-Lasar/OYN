import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backstory } from './backstory';

describe('Backstory', () => {
  let component: Backstory;
  let fixture: ComponentFixture<Backstory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Backstory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Backstory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
