import * as socketIoClient from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class RobotControl {
  private _socket: SocketIOClient.Socket;


  public connect(address: string): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (err: Error) => void) => {
      this._socket = socketIoClient(address);
      this._socket.on('connect', () => resolve());
      this._socket.on('Connect_failed', () => {
          reject(new Error('Connection failed'));
          this._socket = undefined;
        }
      );
    });
  }

  public leftWheelForward() {
    this.leftWheel(1);
  }

  public leftWheelBackward() {
    this.leftWheel(-1);
  }

  public leftWheelStop() {
    this.leftWheel(0);
  }

  public rightWheelForward() {
    this.rightWheel(1);
  }

  public rightWheelBackward() {
    this.rightWheel(-1);
  }

  public rightWheelStop() {
    this.rightWheel(0);
  }

  public forwards() {
    this.leftWheelForward();
    this.rightWheelForward();
  }

  public backwards() {
    this.leftWheelBackward();
    this.rightWheelBackward();
  }

  public left() {
    this.leftWheelForward();
    this.rightWheelStop();
  }

  public right() {
    this.rightWheelForward();
    this.leftWheelStop();
  }

  public stop() {
    this.leftWheelStop();
    this.rightWheelStop();
  }

  private leftWheel(value: number) {
    this._socket.emit('leftWheel', value);
  }

  private rightWheel(value: number) {
    this._socket.emit('rightWheel', value);
  }
}
