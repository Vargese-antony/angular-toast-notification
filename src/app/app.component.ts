import { Component, VERSION, OnInit, AfterViewInit } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements AfterViewInit{
  name = 'Angular ' + VERSION.major;

  /**
   *
   */
  constructor(private notificationService: NotificationService) {
    
    
  }
  ngAfterViewInit(): void {
    setTimeout( () =>
    this.notificationService.open({message: "Hello", title: "first"})
    , 5000);
  }
}
