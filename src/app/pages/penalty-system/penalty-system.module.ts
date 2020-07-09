import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NbStepperModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PenaltySystemComponent } from './penalty-system.component';
import { TradeFlowComponent } from './trade-flow/trade-flow.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule,
  ],
  declarations: [
    PenaltySystemComponent,
    TradeFlowComponent,
  ],

})
export class PenaltySystemModule { }
