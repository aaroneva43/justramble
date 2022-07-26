import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// Model the application state.
export class Timer {
  secondsPassed = 0;
  text = "test";
  interval = -1;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }

  start() {
    this.interval = setInterval(() => {
      this.increase();
    }, 1000);
  }
}

const myTimer = new Timer();

interface TimerParam {
  timer: Timer;
}

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }: TimerParam) => (
  <>
    <button>{timer.text}</button>
    <button onClick={() => timer.reset()}>reset</button>
    <button onClick={() => timer.start()}>start</button>
    <label>Seconds passed: {timer.secondsPassed}</label>
  </>
));

setInterval(() => {
  myTimer.increase();
}, 1000);

export default TimerView;
