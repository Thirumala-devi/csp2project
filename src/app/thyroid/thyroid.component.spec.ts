import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThyroidComponent } from './thyroid.component';

describe('ThyroidComponent', () => {
  let component: ThyroidComponent;
  let fixture: ComponentFixture<ThyroidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThyroidComponent]
    });
    fixture = TestBed.createComponent(ThyroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
