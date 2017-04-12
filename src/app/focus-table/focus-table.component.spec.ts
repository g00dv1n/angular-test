import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusTableComponent } from './focus-table.component';

describe('FocusTableComponent', () => {
  let component: FocusTableComponent;
  let fixture: ComponentFixture<FocusTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
