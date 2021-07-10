import {Component, OnInit} from '@angular/core';
import {
    faHeart,
    faTruck,
    faHeartbeat,
    faSquareRootAlt,
    faChartLine,
    faSignal,
    faChartPie,
    faDollyFlatbed,
    faCoins,
    faReceipt,
    faFileWord,
    faChartBar
} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/operators";

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
    faHeart = faHeart;
    faTruck = faTruck;
    faHeartbeat = faHeartbeat;
    faSquareRootAlt = faSquareRootAlt;
    faDollyFlatbed = faDollyFlatbed;
    faChartLine = faChartLine
    faChartPie = faChartPie
    faSignal = faSignal
    faCoins = faCoins
    faReceipt = faReceipt
    faFileWord = faFileWord
    faChartBar = faChartBar
    navColor = ""

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route: any) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route: any) => route.data)).subscribe((event: any) => {
            this.navColor = event['color'].toString()
        });

    }

    ngOnInit(): void {
    }

}
