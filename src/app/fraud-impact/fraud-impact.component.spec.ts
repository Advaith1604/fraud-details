import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudImpactComponent } from './fraud-impact.component';

describe('FraudImpactComponent', () => {
  let component: FraudImpactComponent;
  let fixture: ComponentFixture<FraudImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudImpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
