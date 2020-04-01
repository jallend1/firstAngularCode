import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowslistItemComponent } from './showslist-item.component';

describe('ShowslistItemComponent', () => {
  let component: ShowslistItemComponent;
  let fixture: ComponentFixture<ShowslistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowslistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowslistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
