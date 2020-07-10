import { Injectable, Inject } from '@angular/core';
import { Notification } from './notification';
import { Subject } from 'rxjs';

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

@Injectable()
export class NotificationService {
    public notifications$: Subject<Notification> = new Subject<Notification>();

    public open(notification: Notification) {
        notification.id = Guid.newGuid();
        this.notifications$.next(notification);
    }
}