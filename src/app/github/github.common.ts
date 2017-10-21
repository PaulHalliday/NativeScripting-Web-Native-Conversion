// App imports
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { GithubRoutes } from './github.routes';

// Module
import { GithubSearchComponent } from './components/github-search/github-search.component';
import { GithubSearchDetailComponent } from './components/github-search-detail/github-search-detail.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>GithubRoutes),
];

export const COMPONENT_DECLARATIONS: any[] = [
  GithubSearchComponent,
  GithubSearchDetailComponent,
];
