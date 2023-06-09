import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportarGrifoPage } from './reportar-grifo.page';

describe('ReportarGrifoPage', () => {
  let component: ReportarGrifoPage;
  let fixture: ComponentFixture<ReportarGrifoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportarGrifoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
