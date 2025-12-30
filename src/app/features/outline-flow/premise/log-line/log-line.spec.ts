import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLine } from './log-line';

describe('LogLine', () => {
  let component: LogLine;
  let fixture: ComponentFixture<LogLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
