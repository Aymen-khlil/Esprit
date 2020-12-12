import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeaccountComponent } from './makeaccount.component';

describe('MakeaccountComponent', () => {
  let component: MakeaccountComponent;
  let fixture: ComponentFixture<MakeaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
