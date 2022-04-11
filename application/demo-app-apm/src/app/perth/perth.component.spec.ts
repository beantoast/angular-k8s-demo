import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerthComponent } from './perth.component';

describe('PerthComponent', () => {
  let component: PerthComponent;
  let fixture: ComponentFixture<PerthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
