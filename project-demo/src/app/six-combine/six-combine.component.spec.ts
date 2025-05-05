import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCombineComponent } from './six-combine.component';

describe('SixCombineComponent', () => {
  let component: SixCombineComponent;
  let fixture: ComponentFixture<SixCombineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixCombineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
