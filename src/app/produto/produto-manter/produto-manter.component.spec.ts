import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoManterComponent } from './produto-manter.component';

describe('ProdutoManterComponent', () => {
  let component: ProdutoManterComponent;
  let fixture: ComponentFixture<ProdutoManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
