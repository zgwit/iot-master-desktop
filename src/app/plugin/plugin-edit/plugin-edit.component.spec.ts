import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginEditComponent } from './plugin-edit.component';

describe('PluginEditComponent', () => {
  let component: PluginEditComponent;
  let fixture: ComponentFixture<PluginEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
