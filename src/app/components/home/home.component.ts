import { Component, Injector, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/site.json'
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppComponentBase implements OnInit {

  postItems: any

  constructor (injector: Injector) {
    super(injector)
    this.postItems = jsonData
  }

  ngOnInit(): void {
    console.log(this.postItems.posts);
    
  }
}
