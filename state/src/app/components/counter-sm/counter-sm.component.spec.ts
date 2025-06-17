import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSMComponent } from './counter-sm.component';

describe('CounterSMComponent', () => {
  let component: CounterSMComponent;
  let fixture: ComponentFixture<CounterSMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterSMComponent]
    });
    fixture = TestBed.createComponent(CounterSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
