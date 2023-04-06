import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidpassComponent } from './rapidpass.component';

describe('RapidpassComponent', () => {
  let component: RapidpassComponent;
  let fixture: ComponentFixture<RapidpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RapidpassComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RapidpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
