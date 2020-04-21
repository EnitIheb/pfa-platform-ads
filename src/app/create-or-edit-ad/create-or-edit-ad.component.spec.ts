import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditAdComponent } from './create-or-edit-ad.component';

describe('CreateOrEditAdComponent', () => {
  let component: CreateOrEditAdComponent;
  let fixture: ComponentFixture<CreateOrEditAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
