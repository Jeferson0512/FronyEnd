import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosPageComponent } from './tecnicos-page.component';

describe('TecnicosPageComponent', () => {
  let component: TecnicosPageComponent;
  let fixture: ComponentFixture<TecnicosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
