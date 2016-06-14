import { Component } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router-deprecated";

@Component({
  selector: 'app-landing',
  templateUrl: 'pages/landing/landing.component.html',
  styleUrls: ['pages/landing/landing.component.css']
})

export class LandingComponent {

  constructor(
      private _router: Router
  ) {}

  /**
   * switches page to pomodoro
   */
  switchPage() {
    this._router.navigate(["Pomo"])
  }
}