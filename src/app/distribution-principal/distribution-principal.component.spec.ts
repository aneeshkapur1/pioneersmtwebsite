import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionPrincipalComponent } from './distribution-principal.component';

describe('DistributionPrincipalComponent', () => {
  let component: DistributionPrincipalComponent;
  let fixture: ComponentFixture<DistributionPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
