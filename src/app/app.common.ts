import { AppRoutingModule } from './app-routing.module';
// demo

import { GithubModule } from './github/github.module';

export const SHARED_MODULES: any[] = [AppRoutingModule, GithubModule];

export * from './app-routing.module';
