import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDownloadComponent } from './animation-download.component';

describe('AnimationDownloadComponent', () => {
  let component: AnimationDownloadComponent;
  let fixture: ComponentFixture<AnimationDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
