import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatelleComponent } from './datelle.component';

describe('DatelleComponent', () => {
  let component: DatelleComponent;
  let fixture: ComponentFixture<DatelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
