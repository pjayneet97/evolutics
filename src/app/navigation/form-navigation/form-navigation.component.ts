import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/operators";
@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.scss']
})
export class FormNavigationComponent implements OnInit {

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  window_title = ""
  previousUrl: string = "";
  currentUrl: string = "";

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private location: Location) {
    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this._activatedRoute),
      map((route: any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route: any) => route.data)).subscribe((event: any) => {
      this.window_title = event['title'].toString()
    });


  }

  ngOnInit(): void {

  }

  goBack() {
    this.location.back();
  }

}
