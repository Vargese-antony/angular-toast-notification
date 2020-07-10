
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { notificationAnimations } from './notification.animations';
import { Notification } from './notification';
import { NotificationService } from './notification.service';
import { NotifiactionConfig, NOTIFICATION_CONFIG } from './notification.config';
import { Subscription } from 'rxjs';
@Component({
  selector: 'notification-container',
  templateUrl: 'notification.container.html',
  styleUrls: ['notification.container.css'],
  animations: [notificationAnimations.notificationState]
})
export class NotificationContainer implements OnInit, OnDestroy {
  private messageSubscription: Subscription;
  private durationTimeoutIdMap = new Map<string, number>();
  private notifications: Notification[] = [];

  constructor(
    @Inject(NOTIFICATION_CONFIG) private notificationConfig: NotifiactionConfig,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.messageSubscription = this.notificationService.notifications$
      .subscribe((notification) => this.open(notification));
  }

  private open(notification: Notification) {
    //insert as first element so that new notification will be shown in the top
    this.notifications.unshift(notification);
    this.closeAfter(notification);
  }
  
  private closeAfter(notification: Notification) {
    setTimeout(() => this.close(notification), this.notificationConfig.duration);
  }

  private close(notification: Notification) {
    let index = this.notifications.findIndex(x => x.id === notification.id);
    //remove the element
    if (index > 0) this.notifications.splice(index, 1);
  }

  public clickHandler(notification: Notification) {
    //invoke callback, incase we have one wired up
    if (notification.clickHandler && notification.clickHandler instanceof Function) {
      notification.clickHandler();
    }
  }

  ngOnDestroy() {
    if(this.messageSubscription) this.messageSubscription.unsubscribe();
  }
}