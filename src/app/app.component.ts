import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { RobotControl } from './RobotControl';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'robo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _robotControl: RobotControl;

  constructor(@Inject(RobotControl) robotControl: RobotControl) {
    this._robotControl = robotControl;
  }


  ngOnInit() {
    this._robotControl.connect('http://192.168.0.181:8080')
      .then(() => console.log('connected'),
        (err) => console.log(err));
  }

  goLeft() {
    console.log('left');
    this._robotControl.left();
  }

  goRight() {
    console.log('right');
    this._robotControl.right();
  }

  goForwards() {
    console.log('forwards');
    this._robotControl.forwards();
  }

  goBackwards() {
    console.log('backwards');
    this._robotControl.backwards();
  }

  stop() {
    console.log('stop');
    this._robotControl.stop();
  }

}
