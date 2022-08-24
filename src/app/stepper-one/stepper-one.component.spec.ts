import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOneComponent } from './stepper-one.component';

describe('StepperOneComponent', () => {
  let component: StepperOneComponent;
  let fixture: ComponentFixture<StepperOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
