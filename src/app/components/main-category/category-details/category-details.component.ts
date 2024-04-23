import { Component, Injector, OnInit } from '@angular/core';
import * as jsonData from '../../../../assets/site.json'
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/shared/models/posts';
import { MainService } from 'src/app/shared/services/main.service';
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent extends AppComponentBase implements OnInit {

  categoryId!: number;
  post!: Posts | undefined;

  constructor(
    injector: Injector,
    private activatedRoute: ActivatedRoute, private mainService: MainService) {
      super(injector)
    this.categoryId = Number(this.activatedRoute.snapshot.params['categoryId'])
  }

  ngOnInit(): void {
    // let articleIndex
    // this.articles = jsonData
    // articleIndex = this.articles.articles.findIndex((post: any) => post.id == this.categoryId)
    // this.article = this.articles.articles[articleIndex]
    // console.log(this.article);
    this.GetPostIdLanding()
  }

  GetPostIdLanding() {
    this.mainService.GetPostIdLanding(this.categoryId).subscribe((post: any) => {
      this.post = post.data
    })
  }

}
