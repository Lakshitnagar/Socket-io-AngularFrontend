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
    // const socket = io(AppConstants.SOCKET_URL);
    // socket.on('connect', function(){
    //   console.log('connect');
    // });

    // socket.on('disconnect', function(){
    //   console.log('disconnect');
    // });

    // socket.emit('client-to-server', 'hello from client');

    // socket.on('server-to-client', function(msg){
    //   console.log('Message from server :' + msg);
    // });

    // Client 1
    var client_1_socket = io(AppConstants.SOCKET_URL + '/client-1');

    client_1_socket.on('connect', function(){
      console.log('client_1_socket connect');
    });

    client_1_socket.on('disconnect', function(){
      console.log('client_1_socket disconnect');
    });

    // client_1_socket.emit('client-to-server', 'hello from client');

    client_1_socket.on('client_1', function(msg){
      console.log('Message from client_1 :', msg);
    });

    // Client 2
    var client_2_socket = io(AppConstants.SOCKET_URL + '/client-2');

    client_2_socket.on('connect', function(){
      console.log('client_2_socket connect');
    });

    client_2_socket.on('disconnect', function(){
      console.log('client_2_socket disconnect');
    });

    // client_1_socket.emit('client-to-server', 'hello from client');

    client_2_socket.on('client_2', function(msg){
      console.log('Message from client_2 :', msg);
    });

    // Client 3
    var client_3_socket = io(AppConstants.SOCKET_URL + '/client-3');

    client_3_socket.on('connect', function(){
      console.log('client_3_socket connect');
    });

    client_3_socket.on('disconnect', function(){
      console.log('client_3_socket disconnect');
    });

    // client_1_socket.emit('client-to-server', 'hello from client');

    client_3_socket.on('client_3', function(msg){
      console.log('Message from client_3 :', msg);
    });

    // Client 4
    var client_4_socket = io(AppConstants.SOCKET_URL + '/client-4');

    client_4_socket.on('connect', function(){
      console.log('client_4_socket connect');
    });

    client_4_socket.on('disconnect', function(){
      console.log('client_4_socket disconnect');
    });

    // client_1_socket.emit('client-to-server', 'hello from client');

    client_4_socket.on('client_4', function(msg){
      console.log('Message from client_4 :', msg);
    });

  }

  title = 'app';
}
