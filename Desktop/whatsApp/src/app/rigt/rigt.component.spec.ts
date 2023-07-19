import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigtComponent } from './rigt.component';

describe('RigtComponent', () => {
  let component: RigtComponent;
  let fixture: ComponentFixture<RigtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RigtComponent]
    });
    fixture = TestBed.createComponent(RigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
