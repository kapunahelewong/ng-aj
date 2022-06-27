import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithchildrenComponent } from './withchildren.component';

describe('WithchildrenComponent', () => {
  let component: WithchildrenComponent;
  let fixture: ComponentFixture<WithchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithchildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
