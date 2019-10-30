import { YodaSpeakApiService } from './services/yoda-speak-api.service';
import { Component } from '@angular/core';
import { ServiceResponse } from './models/service-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  yodaSpeak = 'Tell me what to say young padawan.';
  yodaSpeakError = false;
  yodaSpeakReady = true;
  inputString = '';

  constructor(private yodaSpeakApiService: YodaSpeakApiService) {
  }

  async getYodaSpeak() {
    if (this.inputString) {
      this.yodaSpeak = '';
      this.yodaSpeakReady = false;
      this.yodaSpeakError = false;
      const translationObj: ServiceResponse = await this.yodaSpeakApiService.getYodaSpeak(this.inputString).toPromise();
      this.yodaSpeakReady = true;
      if (translationObj && translationObj.contents && translationObj.contents.translated) {
        this.yodaSpeak = translationObj.contents.translated;
        this.yodaSpeakError = false;
      } else {
        this.yodaSpeak = 'Failed to retrieve YodaSpeak for this Query';
        this.yodaSpeakError = true;
      }
    }
  }
}
