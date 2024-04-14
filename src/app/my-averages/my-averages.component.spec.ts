import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAveragesComponent } from './my-averages.component';

describe('MyAveragesComponent', () => {
  let component: MyAveragesComponent;
  let fixture: ComponentFixture<MyAveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAveragesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
