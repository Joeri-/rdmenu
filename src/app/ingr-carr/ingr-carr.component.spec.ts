import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrCarrComponent } from './ingr-carr.component';

describe('IngrCarrComponent', () => {
  let component: IngrCarrComponent;
  let fixture: ComponentFixture<IngrCarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrCarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrCarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
