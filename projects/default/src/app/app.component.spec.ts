import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ElyLoadableModule} from '@elypia/ng-elypian';
import {CmdToolbarModule} from '../../../commandler/src/lib/toolbar/toolbar.module';
import {CmdNavigationModule} from '../../../commandler/src/lib/navigation/navigation.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ElyLoadableModule,
        CmdToolbarModule,
        CmdNavigationModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
