import { Component, Injector } from '@angular/core';
import { countryMembers } from '../../shared/data/countries';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { Country } from 'src/app/shared/models/countryModel';


@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent extends AppComponentBase {

  countryMembers: Country[] = []

  constructor(injector: Injector) {
    super(injector);

    this.countryMembers = countryMembers;
  }

}
