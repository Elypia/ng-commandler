import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AliasesComponent} from './aliases.component';
import {CmdAliasesModule} from './aliases.module';

describe('AliasesComponent', () => {
  let component: AliasesComponent;
  let fixture: ComponentFixture<AliasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CmdAliasesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
