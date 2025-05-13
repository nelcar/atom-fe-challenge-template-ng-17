import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const routeSlideAnimation = trigger('routeSlideAnimation', [
  transition('Login => Tasks', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%'
      })
    ]),
    query(':leave', [style({ left: 0 })]),
    query(':enter', [style({ left: '100%' })]),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
    ])
  ]),
  transition('Tasks => Login', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width: '100%'
      })
    ]),
    query(':leave', [style({ left: 0 })]),
    query(':enter', [style({ left: '-100%' })]),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
    ])
  ])
]);
