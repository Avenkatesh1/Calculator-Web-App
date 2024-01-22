import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluclatorComponent } from './caluclator.component';

describe('CaluclatorComponent', () => {
  let component: CaluclatorComponent;
  let fixture: ComponentFixture<CaluclatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaluclatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaluclatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
