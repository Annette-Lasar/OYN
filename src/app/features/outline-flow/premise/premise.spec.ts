import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Premise } from './premise';

describe('Premise', () => {
  let component: Premise;
  let fixture: ComponentFixture<Premise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Premise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Premise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
