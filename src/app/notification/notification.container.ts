
import { Component } from '@angular/core';
import { notificationAnimations } from './notification.animations';
import { Notification } from './notification';
@Component({
  selector: 'notification-container',
  templateUrl: 'notification.container.html',
  styleUrls: ['notification.container.css'],
  animations: [notificationAnimations.notificationState]
})
export class NotificationContainer {
  private durationTimeoutIdMap = new Map<string, number>();
  notifications: Notification[] = [];

  click(notification: Notification) {
  }


  onMouseOver(notification: Notification) {

    const timeoutId = this.durationTimeoutIdMap.get(notification.id);

    if (timeoutId) {
      clearTimeout(timeoutId);
      this.durationTimeoutIdMap.delete(notification.id);
    }
  }

  onMouseOut(notification: Notification) {
    const timeoutId = this.durationTimeoutIdMap.get(notification.id);
  }

  closeAfter(duration: number) {
    setTimeout(() => this.close(), duration);
  }

  close() {

  }
}