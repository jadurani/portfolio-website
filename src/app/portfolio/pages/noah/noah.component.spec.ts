import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOAHComponent } from './noah.component';

describe('NOAHComponent', () => {
  let component: NOAHComponent;
  let fixture: ComponentFixture<NOAHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NOAHComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NOAHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
