import { NgModule } from '@angular/core';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './github.common';

import { RouterModule } from '../common';
 
@NgModule({
  imports: [RouterModule, ...SHARED_MODULES],
  declarations: [...COMPONENT_DECLARATIONS],
})
export class GithubModule {}
