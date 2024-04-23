import { Component, Injector } from '@angular/core';
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-general-secretary',
  templateUrl: './general-secretary.component.html',
  styleUrls: ['./general-secretary.component.scss']
})
export class GeneralSecretaryComponent extends AppComponentBase {

  constructor(injector: Injector) {
    super(injector);
  }

}
