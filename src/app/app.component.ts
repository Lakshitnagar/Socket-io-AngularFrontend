import { Component } from '@angular/core';
import * as io from "socket.io-client";
import { AppConstants } from './constants/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const socket = io(AppConstants.SOCKET_URL);
    socket.on('connect', function(){
      console.log('connect');
    });
    socket.on('event', function(data){
      console.log('event');
    });
    socket.on('disconnect', function(){
      console.log('disconnect');
    });
  }

  title = 'app';
}
