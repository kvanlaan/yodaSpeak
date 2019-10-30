import { MatCardModule } from '@angular/material/card';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { YodaSpeakApiService } from './services/yoda-speak-api.service';
import { of as observableOf, Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ServiceResponse } from './models/service-response';

class MockYodaSpeakApiService {
  getYodaSpeak(input: string): Observable<ServiceResponse> {
    return observableOf({
      contents: {
        text: 'Force be with you',
        translated: input,
        translation: 'yoda',
      },
      success: {
        total: 1
      }

    });
  }
}

describe('AppComponent', () => {
  let app;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: YodaSpeakApiService, useValue: MockYodaSpeakApiService }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should default yoda speak to 'Tell me what to say young padawan.'`, () => {
    expect(app.yodaSpeak).toEqual('Tell me what to say young padawan.');
  });

  it(`should default input string to null`, () => {
    expect(app.inputString).toEqual('');
  });

  it('Call getYodaSpeak request, YodaSpeak should be "Force be with you" ', async () => {
    app.inputString = 'hello';
    app.getYodaSpeak().then( result => {
      expect(app.yodaSpeak).toBe('Force be with you');
    });
  });
});
