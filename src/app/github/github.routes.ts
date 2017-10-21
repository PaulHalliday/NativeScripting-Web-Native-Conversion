import { Routes } from '@angular/router';

import { GithubSearchComponent } from './components/github-search/github-search.component';
import { GithubSearchDetailComponent } from './components/github-search-detail/github-search-detail.component';

export const GithubRoutes: Routes = [
  {
    path: 'home',
    component: GithubSearchComponent,
  },
  {
    path: 'home/:id',
    component: GithubSearchDetailComponent,
  },
];
