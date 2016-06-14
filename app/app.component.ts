import {Component, OnInit} from "@angular/core";
import {PomodoroComponent} from './pages/pomodoro/pomodoro.component';
import {LandingComponent} from './pages/landing/landing.component';
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import { Page } from "ui/page";
@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
@RouteConfig([
    { path: "/Landing", component: LandingComponent, name: "Landing", useAsDefault: true },
    { path: "/Pomo", component: PomodoroComponent, name: "Pomo" }
])
export class AppComponent implements OnInit {
   
   constructor(private page: Page){}
   ngOnInit() {
     this.page.actionBarHidden = true;
   }
}