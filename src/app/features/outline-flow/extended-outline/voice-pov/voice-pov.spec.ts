import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicePov } from './voice-pov';

describe('VoicePov', () => {
  let component: VoicePov;
  let fixture: ComponentFixture<VoicePov>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoicePov]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoicePov);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
