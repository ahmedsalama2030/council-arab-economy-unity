import { Component, Injector, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/site.json';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { MainService } from 'src/app/shared/services/main.service';
import { environment } from 'src/environments/environment.development';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('imageScale', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'hovered',
        style({
          transform: 'scale(1.2)',
        })
      ),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class HomeComponent extends AppComponentBase implements OnInit {
  postItems: any;
  headers: any;
  images: any = environment.images;
  posts: any = [];
  imageState: string = 'normal';
  constructor(
    injector: Injector,
    private mainService: MainService,
    private route: Router
  ) {
    super(injector);
    this.getHeaders();
    this.getPosts();
  }

  ngOnInit(): void {}
  getHeaders() {
    this.mainService.GetPostMainLanding().subscribe((res: any) => {
      let headers = res.data;
      headers.forEach((header: any) => {
        const parser = new DOMParser();

        // Parse the HTML string
        const htmlDocument1 = parser.parseFromString(
          header.titleAr,
          'text/html'
        );
        const htmlDocument2 = parser.parseFromString(
          header.titleEn,
          'text/html'
        );
        // Get the text content
        header.titleAr = htmlDocument1.documentElement.textContent;
        header.titleEn = htmlDocument2.documentElement.textContent;
      });

      this.posts = headers;
    });
  }
  getPosts() {
    this.mainService.GetPostMainLanding().subscribe((res: any) => {
      let headers = res.data;
      headers.forEach((header: any) => {
        const parser = new DOMParser();

        // Parse the HTML string
        const htmlDocument1 = parser.parseFromString(
          header.titleAr,
          'text/html'
        );
        const htmlDocument2 = parser.parseFromString(
          header.titleEn,
          'text/html'
        );
        // Get the text content
        header.titleAr = htmlDocument1.documentElement.textContent;
        header.titleEn = htmlDocument2.documentElement.textContent;
      });

      this.headers = headers;
    });
  }
  goDetail(id: any) {
    this.route.navigateByUrl('/category/' + id + '/details');
  }
}
