import { InjectionToken } from "@angular/core";

export const NOTIFICATION_CONFIG = new InjectionToken<string>("NOTIFICATION_CONFIG");

export interface NotifiactionConfig {
  // Duration of the notification in ms
  duration: number;
}

export const defaultNotificationConfig: NotifiactionConfig = {
  duration : 30000
} 