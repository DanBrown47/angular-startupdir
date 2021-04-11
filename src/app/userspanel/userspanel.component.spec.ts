import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspanelComponent } from './userspanel.component';

describe('UserspanelComponent', () => {
  let component: UserspanelComponent;
  let fixture: ComponentFixture<UserspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
