import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaTabelaComponent } from './aula-tabela.component';

describe('AulaTabelaComponent', () => {
  let component: AulaTabelaComponent;
  let fixture: ComponentFixture<AulaTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
