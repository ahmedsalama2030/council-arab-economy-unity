import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as jsonData from '../../../assets/site.json'
import { filter } from 'rxjs';
import { Posts } from 'src/app/shared/models/posts';
import { MainService } from 'src/app/shared/services/main.service';
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss']
})
export class MainCategoryComponent extends AppComponentBase implements OnInit {

  categoryId!: number;
  posts: Posts[] = [];
  article: any
  currentRoute: any;

  constructor(
    injector: Injector,
    private activatedRoute: ActivatedRoute, private router: Router, private mainService: MainService) {
      super(injector)
    this.categoryId = Number(this.activatedRoute.snapshot.params['categoryId'])
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url
      if (this.currentRoute.includes('category')) {
        this.onRouteChange(event.url);
      }
    })
  }

  ngOnInit(): void {
    let articleIndex
    // this.articles = jsonData
    // articleIndex = this.articles.articles.findIndex((post: any) => post.id == this.categoryId)
    // this.article = this.articles.articles[articleIndex]

    this.GetPostByHeaderLanding()

  }

  GetPostByHeaderLanding() {
    this.mainService.GetPostByHeaderLanding(this.categoryId).subscribe((posts: any) => {
      // this.posts.push(posts.data)
      this.posts = posts.data
    })
  }

  onRouteChange(url: string): void {
    // Your function logic here
    console.log('Route changed:', url);
    this.categoryId = Number(this.activatedRoute.snapshot.params['categoryId'])

    this.GetPostByHeaderLanding()
  }
}
