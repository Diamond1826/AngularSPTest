import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandortComponent } from './standort.component';

describe('StandortComponent', () => {
  let component: StandortComponent;
  let fixture: ComponentFixture<StandortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
