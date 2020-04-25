import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyclientsComponent } from './keyclients.component';

describe('KeyclientsComponent', () => {
  let component: KeyclientsComponent;
  let fixture: ComponentFixture<KeyclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
