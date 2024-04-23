import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as feather from 'feather-icons';
import { filter } from 'rxjs';
import { fadeInAnimation } from 'src/app/shared/data/router-animation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [fadeInAnimation]
})
export class ContentComponent implements OnInit, AfterViewInit {

  @ViewChild('o') o: any
  currentRoute: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((ev: any) => {
      this.currentRoute = ev.url
      if (!this.currentRoute.includes('new-member')) {
        localStorage.removeItem('personObject')
      }
    })
  }

  ngAfterViewInit() {
    this.cdr.detectChanges()
    Promise.resolve().then(() => {
      feather.replace()
      this.getRouterOutletState(this.o)
    })
  }

  getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit(): void {
      
  }

}
