import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngrComponent } from './create-ingr.component';

describe('CreateIngrComponent', () => {
  let component: CreateIngrComponent;
  let fixture: ComponentFixture<CreateIngrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIngrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIngrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
