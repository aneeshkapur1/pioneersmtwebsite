import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyprocessComponent } from './assemblyprocess.component';

describe('AssemblyprocessComponent', () => {
  let component: AssemblyprocessComponent;
  let fixture: ComponentFixture<AssemblyprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
