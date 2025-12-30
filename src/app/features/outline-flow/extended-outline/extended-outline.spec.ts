import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedOutline } from './extended-outline';

describe('ExtendedOutline', () => {
  let component: ExtendedOutline;
  let fixture: ComponentFixture<ExtendedOutline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedOutline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedOutline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
