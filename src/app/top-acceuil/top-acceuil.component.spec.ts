import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAcceuilComponent } from './top-acceuil.component';

describe('TopAcceuilComponent', () => {
  let component: TopAcceuilComponent;
  let fixture: ComponentFixture<TopAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
