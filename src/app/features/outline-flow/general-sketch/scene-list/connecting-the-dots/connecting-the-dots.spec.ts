import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectingTheDots } from './connecting-the-dots';

describe('ConnectingTheDots', () => {
  let component: ConnectingTheDots;
  let fixture: ComponentFixture<ConnectingTheDots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectingTheDots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectingTheDots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
