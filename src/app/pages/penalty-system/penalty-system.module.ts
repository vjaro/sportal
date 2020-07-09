import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NbStepperModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PenaltySystemComponent } from './penalty-system.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule,
  ],
  declarations: [
    PenaltySystemComponent,
  ],

})
export class PenaltySystemModule { }
