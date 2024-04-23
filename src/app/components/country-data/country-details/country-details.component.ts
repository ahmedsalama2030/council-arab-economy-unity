import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { countryMembers } from 'src/app/shared/data/countries';
import { Country } from 'src/app/shared/models/countryModel';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent extends AppComponentBase implements OnInit {

  countryMembers: Country[] = []
  country!: Country

  countryId!: number;

  constructor(injector: Injector, private activatedRoute: ActivatedRoute) {
    super(injector);

    this.countryMembers = countryMembers;
    this.countryId = Number(this.activatedRoute.snapshot.params['id'])
  }

  ngOnInit(): void {
    let countryIndex

    countryIndex = this.countryMembers.findIndex((country: any) => country.id == this.countryId)

    this.country = this.countryMembers[countryIndex]
  }

}
