import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServe = false;
  serverCreationStatus = false;
  serverName = 'Test Server Yeah ';
  constructor() {
    setTimeout(() => {
      this.allowNewServe = true;
    }, 3000);
  }

  onServerCreate() {
    this.serverCreationStatus = true;
  }
  // onServerNameInput(event: { target: HTMLInputElement }) {
  //   this.serverName = event.target.value;
  // }
}
