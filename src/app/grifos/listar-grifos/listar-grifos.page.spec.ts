import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarGrifosPage } from './listar-grifos.page';

describe('ListarGrifosPage', () => {
  let component: ListarGrifosPage;
  let fixture: ComponentFixture<ListarGrifosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarGrifosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
