import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSketch } from './general-sketch';

describe('GeneralSketch', () => {
  let component: GeneralSketch;
  let fixture: ComponentFixture<GeneralSketch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralSketch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSketch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
