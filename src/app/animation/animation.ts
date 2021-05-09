import {
    animation,
    trigger,
    transition,
    animate,
    style,
    useAnimation,
    state,
    sequence,
    query,
    animateChild,
    stagger
  } from '@angular/animations';
  
  export const slideInAnimation = animation([
    style({ transform: 'translateX(-200%)', opacity: 0 }),
    animate('0.5s ease-in')
  ]);
  
  export const slideOutAnimation = animation([
    animate('{{ timings }}', style({ transform: 'translateX(100%)', opacity: 0 }))
  ]);
  
  export const Animations = {
    ElementFadeIn: trigger('elementFadeIn', [transition(':enter', [useAnimation(slideInAnimation)])]),
  
    DeleteElementFadeOut: trigger('deleteElementFadeOut', [
      transition(':leave', [useAnimation(slideOutAnimation, { params: { timings: '0.3s ease-out' } })])
    ]),
  
    WidthChange: trigger('widthChange', [
      state(
        'normal',
        style({
          width: '40%'
        })
      ),
      state(
        'big',
        style({
          width: '80%'
        })
      ),
      transition('normal => big', [sequence([animate('0.3s'), query('@elementFadeIn', animateChild())])]),
      transition('big => normal', animate('0.3s'))
    ]),
  
    IndicatorRotate: trigger('indicatorRotate', [
      state('open', style({ transform: 'rotate(0deg)' })),
      state('closed', style({ transform: 'rotate(180deg)' })),
      transition('open <=> closed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ]),
  
    LoginScreenAnimation: trigger('loginScreenAnimation', [
      /* transition(':enter', [
        // setup container positions
        query('img', style({ height: '0%' }), { optional: true }),
        query('#login-title', style({ opacity: 0, transform: 'translateY(-146%)' }), { optional: true }),
        query('.version', style({ opacity: 0, transform: 'translateY(-146%)' }), { optional: true }),
        query('.login-container', style({ opacity: 0, transform: 'translateY(-146%)' }), { optional: true }),
  
        // animate container entry to the screen
        query('img', animate('0.5s', style({ height: '86%' })), { optional: true }),
        query('#login-title', animate('0.5s', style({ opacity: 1, transform: 'translateY(0%)' })), { optional: true }),
        query('.version', animate('0.5s', style({ opacity: 1, transform: 'translateY(0%)' })), { optional: true }),
        query('.login-container', animate('0.5s', style({ opacity: 1, transform: 'translateY(0%)' })), { optional: true })
      ])*/
    ]),
  
    PageTitleAnimation: trigger('pageTitleAnimation', [
      /* transition(':enter', [
        style({ fontSize: '6px', marginLeft: '100%' }),
        animate('0.5s', style({ fontSize: '6px', marginLeft: '0%' })),
        style({ fontSize: '6px' }),
        animate('1s', style({ fontSize: '20px' }))
      ]),
      transition(':leave', [animation([style({ height: '100%' }), animate('0.5s')])])*/
    ]),
  
    DataTableFiltersAnimation: trigger('dataTableFiltersAnimation', [
      /* transition(':enter', [
        style({ transform: 'translateX(60%) translateY(-450%)' }),
        animate('0.2s', style({ transform: 'translateX(50%) translateY(0%)' })),
        animate('0.2s', style({ transform: 'translateX(25%) translateY(-250%)' })),
        animate('0.2s', style({ transform: 'translateX(20%) translateY(-0%)' })),
        animate('0.2s', style({ transform: 'translateX(10%) translateY(-100%)' })),
        animate('0.2s', style({ transform: 'translateX(0%) translateY(0%)' }))
      ])*/
    ]),
  
    OpacityAnimation: trigger('opacityAnimation', [
      /* transition(':enter', [style({ opacity: 0 }), animate('2s', style({ opacity: 1 }))]),
      transition(':leave', [animation([style({ opacity: 0 }), animate('2s')])])*/
    ]),
  
    TableElementAnimation: trigger('tableElementAnimation', [
      /* transition('* => *', [
        query('mat-row', style({ transform: 'translateX(-100%)' }), { optional: true }),
        query('mat-row', stagger('200ms', [animate('400ms', style({ transform: 'translateX(0%)' }))]), { optional: true })
      ])*/
    ]),
  
    OpenClose: trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden'
        })
      ),
      transition('open => closed', [animate('300ms 0.3ms ease-out')]),
      transition('closed => open', [animate('300ms 0.3ms ease-out')])
    ])
  };