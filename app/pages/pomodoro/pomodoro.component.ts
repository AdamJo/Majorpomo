import { Component, OnInit } from "@angular/core";
import { Clock } from '../../shared/clock.helper'
import { setInterval, clearInterval } from 'timer'
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Slider } from "ui/slider"
import application = require("application");

@Component({
  selector: 'app-pomodoro',
  templateUrl: 'pages/pomodoro/pomodoro.component.html',
  styleUrls: ['pages/pomodoro/pomodoro.component.css'],
  providers: [Clock]
})

export class PomodoroComponent implements OnInit {
  private pomo: number = 25;
  private break: number = 5;
  private flag: string = 'POMODORO';
  private interval: any;
  private duration = '00:00:00';
  private setInterval = setInterval;
  private clearInterval = clearInterval;

  constructor(private clock: Clock, private page: Page) {}

  /**
   * disables top action bar on this page
   */
  ngOnInit() {
    this.page.actionBarHidden = true;
    /**
     * disables back button which stops current pomo section
     */
    if (application.android) {
      application.android.on(application.AndroidApplication.activityBackPressedEvent, this.backEvent);
    }
  }
  /** 
   * 
   */
  backEvent(args) {
    args.cancel = true
  }
  /**
   * toggle timer start/stop
   */
  playPause() {
    if (!this.clock.running) {
      this.clock.start();
      this.time();
    } else {
      this.clearInterval(this.interval)
      this.clock.stop();
    }
  }
  /** 
   * starts the timer
   */
  time() {
    let time;
    if (this.flag === 'POMODORO') {
      time = this.pomo * 60;
    } else {
      time = this.break * 60;
    }
    this.interval = this.setInterval(() => {
      this.duration = this.clock.formatTime(time)
      if (this.duration[0] === '-') {
        this.reset()
        this.flag = (this.flag == 'POMODORO') 
                    ? 'BREAK' 
                    : 'POMODORO';
      }
    }, 1)
  }
  /** 
   * resets timer for either pomo or break
   */
  reset() {
    this.clearInterval(this.interval);
    this.clock.reset();
    this.duration = '00:00:00'
  }
  /** 
   * resets everything initial 
   */
  resetAll() {
    this.clearInterval(this.interval);
    this.clock.reset();
    this.duration = '00:00:00'
    this.flag = 'POMODORO';
  }
  /** 
   * when the slider changes onBreakChange(newTime) resets the timer duration 
   */
  onBreakChange(newtime){
    if (this.duration !== "00:00:00") {
      this.reset();
    }
    this.break=newtime;
  }
  /** 
   * when the slider changes onPomoChange(newTime) resets the timer duration 
   */
  onPomoChange(newtime){
    if (this.duration !== "00:00:00") {
      this.reset();
    }
    this.pomo=newtime;
  }
}