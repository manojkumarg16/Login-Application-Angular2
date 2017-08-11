import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavoneComponent } from './navone.component';

describe('NavoneComponent', () => {
  let component: NavoneComponent;
  let fixture: ComponentFixture<NavoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
