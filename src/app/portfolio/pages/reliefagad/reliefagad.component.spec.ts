import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefagadComponent } from './reliefagad.component';

describe('ReliefagadComponent', () => {
  let component: ReliefagadComponent;
  let fixture: ComponentFixture<ReliefagadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReliefagadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReliefagadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
