import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrAldiComponent } from './ingr-aldi.component';

describe('IngrAldiComponent', () => {
  let component: IngrAldiComponent;
  let fixture: ComponentFixture<IngrAldiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrAldiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrAldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
