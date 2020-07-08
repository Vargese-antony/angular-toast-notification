import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export const notificationAnimations: {
  notificationState: AnimationTriggerMetadata;
} = {
  notificationState: trigger('state', [
    state('hidden', style({
      opacity: 0,
      height: 0,
    })),
    state('visible', style({
      opacity: 1,
      height: '*',
    })),
    transition('hidden => show, show => hidden', [
      animate('0.25s')
    ]),
  ])
};