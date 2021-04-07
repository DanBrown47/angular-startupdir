import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestfirmComponent } from './requestfirm.component';

describe('RequestfirmComponent', () => {
  let component: RequestfirmComponent;
  let fixture: ComponentFixture<RequestfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
