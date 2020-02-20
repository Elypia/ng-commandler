import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ControllerComponent} from './controller.component';
import {CmdModuleModule} from './controller.controller';

describe('ModuleComponent', () => {
  let component: ControllerComponent;
  let fixture: ComponentFixture<ControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CmdModuleModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
