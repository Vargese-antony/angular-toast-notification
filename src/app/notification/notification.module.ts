import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationContainer } from './notification.container';
import { NotificationComponent } from './components/notification.component';
import { NOTIFICATION_CONFIG, NotifiactionConfig, defaultNotificationConfig } from './notification.config';
import { NotificationService } from './notification.service';


@NgModule({
  imports: [CommonModule],
  declarations: [NotificationContainer, NotificationComponent],
  exports: [NotificationContainer]
})
export class NotificationModule {
  static forRoot(
    notificationConfig: NotifiactionConfig = defaultNotificationConfig
  ): ModuleWithProviders<NotificationModule> {
    return {
      ngModule: NotificationModule,
      providers: [
        {
          provide: NOTIFICATION_CONFIG,
          useValue: notificationConfig
        },
        NotificationService
      ]
    }

  }
}