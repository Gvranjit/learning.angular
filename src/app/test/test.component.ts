import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    const testObservable = new Observable((subscriber) => {
      // do something here and complete
      subscriber.next('TESTING ');
    });

    testObservable.subscribe((observer) => {
      console.log(observer);
    });
  }
}
