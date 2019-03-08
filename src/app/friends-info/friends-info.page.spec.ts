import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsInfoPage } from './friends-info.page';

describe('FriendsInfoPage', () => {
  let component: FriendsInfoPage;
  let fixture: ComponentFixture<FriendsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
