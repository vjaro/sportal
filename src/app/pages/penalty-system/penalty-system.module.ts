import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NbStepperModule } from '@nebular/theme';
import { NbRadioModule} from '@nebular/theme';
import { NbInputModule} from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NbDatepickerModule } from '@nebular/theme';
import { NbSelectModule } from '@nebular/theme';
import { NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PenaltySystemComponent } from './penalty-system.component';
import { TradeFlowComponent } from './trade-flow/trade-flow.component';
import { ReviewAuthComponent } from './review-auth/review-auth.component';
import { MarketSummaryComponent } from './market-summary/market-summary.component';


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule,
    NbRadioModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule,
    NbSelectModule,
    NbAccordionModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  declarations: [
    PenaltySystemComponent,
    TradeFlowComponent,
    ReviewAuthComponent,
    MarketSummaryComponent,
  ],

})
export class PenaltySystemModule { }
