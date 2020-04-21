import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDealsComponent } from './popular-deals.component';

describe('PopularDealsComponent', () => {
  let component: PopularDealsComponent;
  let fixture: ComponentFixture<PopularDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
