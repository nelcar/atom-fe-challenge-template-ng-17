import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeFadeAnimation = trigger('routeFadeAnimation', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('200ms ease-out', style({ opacity: 1, transform: 'none' })),
  ]),
]);
