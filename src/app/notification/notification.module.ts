import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationContainer } from './notification.container';
import { NotificationComponent } from './components/notification.component';


@NgModule({
  imports:      [CommonModule ],
  declarations: [ NotificationContainer, NotificationComponent ],
  exports:[NotificationContainer]
})
export class NotificationModule { }