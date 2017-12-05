import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssistComponent } from './create-assist.component';

describe('CreateAssistComponent', () => {
  let component: CreateAssistComponent;
  let fixture: ComponentFixture<CreateAssistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
