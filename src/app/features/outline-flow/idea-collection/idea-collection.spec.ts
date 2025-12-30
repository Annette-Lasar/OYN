import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaCollection } from './idea-collection';

describe('IdeaCollection', () => {
  let component: IdeaCollection;
  let fixture: ComponentFixture<IdeaCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
