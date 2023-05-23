import { Component } from '@angular/core';
import { LogService } from './root/shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService],
})
export class AppComponent {
  title = "Gaurav's New Angular App - Only for learning purposes";
  name = 'Code';
  currentPage = 'shopping';
  constructor(private logService: LogService) {}
  updateCurrentPage(e: string) {
    this.currentPage = e;
    this.logService.logToConsole('CURRENT PAGE IS :' + this.currentPage);
  }
}
