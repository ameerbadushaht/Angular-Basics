import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rdemo1Component } from './rdemo1.component';

describe('Rdemo1Component', () => {
  let component: Rdemo1Component;
  let fixture: ComponentFixture<Rdemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rdemo1Component]
    });
    fixture = TestBed.createComponent(Rdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
