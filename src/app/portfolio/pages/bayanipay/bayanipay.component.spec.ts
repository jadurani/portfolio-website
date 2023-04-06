import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayanipayComponent } from './bayanipay.component';

describe('BayanipayComponent', () => {
  let component: BayanipayComponent;
  let fixture: ComponentFixture<BayanipayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BayanipayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BayanipayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
