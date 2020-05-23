import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaManterComponent } from './venda-manter.component';

describe('VendaManterComponent', () => {
  let component: VendaManterComponent;
  let fixture: ComponentFixture<VendaManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
