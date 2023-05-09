import { Component } from '@angular/core';
enum Status {
  ONLINE = 'online',
  OFFLINE = 'offline',
}
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = 10;
  serverStatus: Status = Status.OFFLINE;
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? Status.ONLINE : Status.OFFLINE;
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === Status.ONLINE ? 'green' : 'red';
  }
}
