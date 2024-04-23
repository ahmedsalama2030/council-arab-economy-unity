import { Component, Injector, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/site.json';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AppComponentBase implements OnInit {
  postItems: any;
  headers: any;

  constructor(injector: Injector, private mainService: MainService) {
    super(injector);
    this.getHeaders();
  }

  ngOnInit(): void {}
  getHeaders() {
    this.mainService.GetPostMainLanding().subscribe((res: any) => {
      this.headers = res.data;
    });
  }
}
