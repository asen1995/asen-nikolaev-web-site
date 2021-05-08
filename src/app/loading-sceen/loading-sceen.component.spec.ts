import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSceenComponent } from './loading-sceen.component';

describe('LoadingSceenComponent', () => {
  let component: LoadingSceenComponent;
  let fixture: ComponentFixture<LoadingSceenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSceenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSceenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
