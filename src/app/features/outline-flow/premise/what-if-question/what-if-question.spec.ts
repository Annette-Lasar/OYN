import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIfQuestion } from './what-if-question';

describe('WhatIfQuestion', () => {
  let component: WhatIfQuestion;
  let fixture: ComponentFixture<WhatIfQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIfQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIfQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
