import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router-deprecated";

@Component({
  selector: 'app-landing',
  templateUrl: 'pages/landing/landing.component.html',
  styleUrls: ['pages/landing/landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor(
      private _router: Router
  ) {}

  ngOnInit() {
    console.log('here');
  }
  switchPage() {
    this._router.navigate(["Pomo"])
  }
}