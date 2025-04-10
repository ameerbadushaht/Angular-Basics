import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPComponent } from './query-p.component';

describe('QueryPComponent', () => {
  let component: QueryPComponent;
  let fixture: ComponentFixture<QueryPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryPComponent]
    });
    fixture = TestBed.createComponent(QueryPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
