import {Injectable} from '@angular/core';

/**
 * a timer modified from https://gist.github.com/IceCreamYou/6050788
 */
@Injectable()
export class Clock {
  private lastStartTime = 0;
  private lastDeltaTime = 0;
  public elapsedTime = 0;
  public running = false;
  
  constructor() {}
  /**
   * Get the time elapsed in seconds since the last time a delta was measured.
   */
  getDelta() {
    var diff = 0;
    let now = Date.now();;
    diff = (now - this.lastDeltaTime) / 1000; // ms to s
    this.lastDeltaTime = now;
    this.elapsedTime += diff;
    return diff;
  };
  /**
   * Start the timer.
   */
  start() {
    this.lastStartTime = this.lastDeltaTime = Date.now();
    this.running = true;
  };
  /**
   * Stop the timer.
   */
  stop() {
    this.elapsedTime += this.getDelta();
    this.running = false;
  };
  /**
   * Get the amount of time the timer has been running, in seconds.
   */
  getElapsedTime() {
    this.getDelta();
    return this.elapsedTime;
  };
  /**
   * resets timer
   */
  reset() {
    this.stop();
    this.elapsedTime = 0;
  }
  /**
   * formats numbers to always have a leading 0
   */
  pad(num, size) {
    let s = '0000' + num;
    return s.substr(s.length - size);
  };
  /**
   * format time duration
   */
  formatTime(userTime : number) {
    this.getDelta();
    let newTime = '';
    let time = userTime - this.elapsedTime;
    let ms = Math.floor(time * 100) % 100;
    let s = Math.floor(time) % 60;
    let m = Math.floor(time / 60) % 60;
    let h = Math.floor(time / 3600);

    if (h !== 0) {
      newTime = this.pad(h, 2) +
                ':' + this.pad(m, 2) +
                ':' + this.pad(s, 2) +
                ':' + this.pad(ms, 2);
    }
    else {
      newTime = this.pad(m, 2) + 
                ':' + this.pad(s, 2) +
                ':' +  this.pad(ms, 2);
    }
    return newTime;
  };
}