import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreehandInterview } from './freehand-interview';

describe('FreehandInterview', () => {
  let component: FreehandInterview;
  let fixture: ComponentFixture<FreehandInterview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreehandInterview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreehandInterview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
