import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniespanelComponent } from './companiespanel.component';

describe('CompaniespanelComponent', () => {
  let component: CompaniespanelComponent;
  let fixture: ComponentFixture<CompaniespanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniespanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniespanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
