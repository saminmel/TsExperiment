import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadOperatorComponent } from './spread-operator.component';

describe('SpreadOperatorComponent', () => {
  let component: SpreadOperatorComponent;
  let fixture: ComponentFixture<SpreadOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
