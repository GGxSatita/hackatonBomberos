import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicacionGrifoPage } from './ubicacion-grifo.page';

describe('UbicacionGrifoPage', () => {
  let component: UbicacionGrifoPage;
  let fixture: ComponentFixture<UbicacionGrifoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UbicacionGrifoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
