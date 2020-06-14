import { Component } from '@angular/core';
import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1=>2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(50%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        group([
          query(':leave', [
            animate(
              '0.5s cubic-bezier(0.42,0,1,1)',
              style({
                transform: 'translateX(0%)',
                visibility: 'hidden'
              })
            ),
          ]),
          query(
            ':enter',
            animate(
              '0.5s cubic-bezier(0.42,0,1,1)',
              style({
                transform: 'translateX(0)',
              })
            )
          ),
        ]),
      ]),
      transition('2=>1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(0)' })),
        query(
          ':enteer, :leave',
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          })
        ),
        group([
          query(':leave', [
            animate(
              '0.5s cubic-bezier(0.42,0,1,1)',
              style({
                transform: 'translateX(50%)',
              })
            ),
          ]),
          query(
            ':enter',
            animate(
              '0.5s cubic-bezier(0.42,0,1,1)',
              style({
                transform: 'translateX(0)',
                visibility: 'hidden'
              })
            )
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  visible = true;
  title = 'freshprints';

  getDepth = (outlet) => {
    return outlet.activatedRouteData['depth'];
  };
}
