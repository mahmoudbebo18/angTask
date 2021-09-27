import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';
import { format } from 'date-fns';

@Component({
  selector: 'count-down',
  template: `
   
    <div class="my-count">
      <countdown [config]="config"></countdown>
    </div>
  `,
  host: {
    '[class.card]': `true`,
    '[class.text-center]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountDownComponent {
  config: CountdownConfig = {
    leftTime: 60 * 60 *60* 24  , 
    format: 'dd : HH : mm : ss',
    formatDate: ({ date, formatStr }) => format(date, formatStr),
  };
}





