import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudActivityDetailsComponent } from './fraud-activity-details.component';

describe('FraudActivityDetailsComponent', () => {
  let component: FraudActivityDetailsComponent;
  let fixture: ComponentFixture<FraudActivityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudActivityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
