import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificadoComponent } from './significado.component';

describe('SignificadoComponent', () => {
  let component: SignificadoComponent;
  let fixture: ComponentFixture<SignificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
