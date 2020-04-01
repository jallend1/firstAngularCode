import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowslistComponent } from './showslist.component';

describe('ShowslistComponent', () => {
  let component: ShowslistComponent;
  let fixture: ComponentFixture<ShowslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
