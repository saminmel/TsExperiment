import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutUpTslintComponent } from './shut-up-tslint.component';

describe('ShutUpTslintComponent', () => {
  let component: ShutUpTslintComponent;
  let fixture: ComponentFixture<ShutUpTslintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutUpTslintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShutUpTslintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
