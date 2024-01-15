import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeebyIdComponent } from './get-employeeby-id.component';

describe('GetEmployeebyIdComponent', () => {
  let component: GetEmployeebyIdComponent;
  let fixture: ComponentFixture<GetEmployeebyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeebyIdComponent]
    });
    fixture = TestBed.createComponent(GetEmployeebyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
