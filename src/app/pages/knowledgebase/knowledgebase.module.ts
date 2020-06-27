import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { KnowledgebaseComponent } from './knowledgebase.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    KnowledgebaseComponent,
  ],
})
export class KnowledgebaseModule { }
