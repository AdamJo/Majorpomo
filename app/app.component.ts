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
    template: '<page-router-outlet></page-router-outlet>'
})
@RouteConfig([
    { path: "/Landing", component: LandingComponent, name: "Landing", useAsDefault: true },
    { path: "/Pomo", component: PomodoroComponent, name: "Pomo" }
])
export class AppComponent implements OnInit {

   constructor(private page: Page){}
   /**
   * disables top action bar on this page
   */
   ngOnInit() {
     this.page.actionBarHidden = true;
   }
}
