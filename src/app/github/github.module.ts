import { NgModule } from '@angular/core';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './github.common';

import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [...COMPONENT_DECLARATIONS],
})
export class GithubModule {}
