import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeContentComponent } from './anime-content.component';

describe('AnimeContentComponent', () => {
  let component: AnimeContentComponent;
  let fixture: ComponentFixture<AnimeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
