import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdelaideComponent } from './adelaide.component';

describe('AdelaideComponent', () => {
  let component: AdelaideComponent;
  let fixture: ComponentFixture<AdelaideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdelaideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdelaideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
