import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoGrifoPage } from './info-grifo.page';

describe('InfoGrifoPage', () => {
  let component: InfoGrifoPage;
  let fixture: ComponentFixture<InfoGrifoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoGrifoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
