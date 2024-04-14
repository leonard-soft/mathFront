import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAverageComponent } from './new-average.component';

describe('NewAverageComponent', () => {
  let component: NewAverageComponent;
  let fixture: ComponentFixture<NewAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAverageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
