import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "Gaurav's New Angular App - Only for learning purposes";
  name = 'Code';
  currentPage = 'shopping';

  updateCurrentPage(e: string) {
    this.currentPage = e;
  }
}
