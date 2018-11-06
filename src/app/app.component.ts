import { Component } from '@angular/core';
import * as io from "socket.io-client";
import { AppConstants } from './constants/app-constants';
import { AppConfig } from './constants/app-config';
import { Queue } from './utility/data-structure/queue'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    this.dataInit();

  }

  public queue = new Queue;
  public data = [];
  public dataExtraction = false;

  private dataInit = function() {

    for(let c = 1; c <= AppConfig.NUMBER_OF_CLIENTS; c++) {
      var client_socket = this.createClientSocket(AppConstants.NAMESPACE_PREFIX + c);

      client_socket.on('connect', function(){
        // console.log(AppConstants.NAMESPACE_PREFIX + c +' connect');
      });
  
      client_socket.on('disconnect', () => {
        // console.log(AppConstants.NAMESPACE_PREFIX + c +' disconnect');
        // this.queue.emptyQueue();
      });
  
      client_socket.on(AppConstants.EVENT_PREFIX + c + AppConstants.EVENT_SUFFIX, (msg) => {
        // console.log(AppConstants.EVENT_PREFIX + c + AppConstants.EVENT_SUFFIX, msg);
        let newdate = new Date();
        this.queue.enqueue({
          'clientId': c,
          'data': msg
        });
        // console.log(this.queue);
        if(!this.dataExtraction) {
          this.getDataFromQueue();
        }
      });
    }
  }

  private createClientSocket = function(socketNamespace) {
    return io(AppConstants.SOCKET_URL + '/' + socketNamespace, {transports: ['websocket'], upgrade: false});
  }

  private getDataFromQueue = function() {
    console.log('---------- Data Extraction start ----------');
    console.log(this.queue);
    this.dataExtraction = true;
    while(!this.queue.isEmpty()) {
      this.data.push(this.queue.dequeue());
    }
    this.dataExtraction = false;
    console.log(this.data);
    console.log(this.queue);
    console.log('---------- Data Extraction stopped ----------')
  }

  title = 'app';
}
