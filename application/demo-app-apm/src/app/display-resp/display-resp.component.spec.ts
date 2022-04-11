import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRespComponent } from './display-resp.component';

describe('DisplayRespComponent', () => {
  let component: DisplayRespComponent;
  let fixture: ComponentFixture<DisplayRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
