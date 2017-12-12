import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilterWrapComponent } from './create-filter-wrap.component';

describe('CreateFilterWrapComponent', () => {
  let component: CreateFilterWrapComponent;
  let fixture: ComponentFixture<CreateFilterWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFilterWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFilterWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
