import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyfecycleComponent } from './lyfecycle.component';

describe('LyfecycleComponent', () => {
  let component: LyfecycleComponent;
  let fixture: ComponentFixture<LyfecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LyfecycleComponent]
    });
    fixture = TestBed.createComponent(LyfecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
