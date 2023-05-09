import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServe = false;
  serverCreationStatus = 'No server was created';
  constructor() {
    setTimeout(() => {
      this.allowNewServe = true;
    }, 3000);
  }

  onServerCreate() {
    this.serverCreationStatus = 'A new server was crated';
  }
}
