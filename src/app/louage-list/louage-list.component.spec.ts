import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouageListComponent } from './louage-list.component';

describe('LouageListComponent', () => {
  let component: LouageListComponent;
  let fixture: ComponentFixture<LouageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LouageListComponent]
    });
    fixture = TestBed.createComponent(LouageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
