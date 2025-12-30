import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldBuilding } from './world-building';

describe('WorldBuilding', () => {
  let component: WorldBuilding;
  let fixture: ComponentFixture<WorldBuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldBuilding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldBuilding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
