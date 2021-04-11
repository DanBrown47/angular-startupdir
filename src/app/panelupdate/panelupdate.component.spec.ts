import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelupdateComponent } from './panelupdate.component';

describe('PanelupdateComponent', () => {
  let component: PanelupdateComponent;
  let fixture: ComponentFixture<PanelupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
