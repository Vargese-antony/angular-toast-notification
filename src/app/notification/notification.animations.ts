import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const notificationAnimations: {
  notificationState: AnimationTriggerMetadata;
} = {
  notificationState: trigger('EnterLeave', [
    state('flyIn', style({
      transform: 'translateX(0)'
    })),
    transition(':enter', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate('0.5s 300ms ease-in')
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({
        transform: 'translateX(100%)'
      }))
    ])
  ])
};