import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandComponent} from './command.component';
import {CmdCommandModule} from './command.module';

describe('CommandComponent', () => {
  let component: CommandComponent;
  let fixture: ComponentFixture<CommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CmdCommandModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
