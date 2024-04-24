import { Component, Inject, Injector, OnInit } from '@angular/core';
import * as jsonData from '../../../../assets/site.json';
import { AppComponentBase } from '../../app-component-base';
import { DOCUMENT } from '@angular/common';
import { MainService } from '../../services/main.service';
import { Header, HeaderList } from '../../models/header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends AppComponentBase implements OnInit {
  menuItems: Header[] = [];
  currentLang!: string;

  constructor(
    injector: Injector,
    @Inject(DOCUMENT) private document: Document,
    private mainService: MainService,
    private route: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.GetHeaderLanding();
    this.currentLang = localStorage.getItem('currentLang') || 'ar';
    this.translate.use(this.currentLang);
  }

  GetHeaderLanding() {
    this.mainService.GetHeaderLanding().subscribe((res: any) => {
      this.menuItems = res.data;
    });
  }

  toggleItem(event: any) {
    let dropDownMenu = event.target.parentElement.nextElementSibling;
    dropDownMenu.classList.toggle('show');
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    this.document.documentElement.lang = localStorage.getItem(
      'currentLang'
    ) as any;
    window.location.reload();
  }
  goDetail(id: any) {
    alert();
    this.route.navigateByUrl('/category/' + id + '/details');
  }
}
