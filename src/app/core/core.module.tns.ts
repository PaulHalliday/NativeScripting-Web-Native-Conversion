import { GithubHttpInterceptor } from './services/github.interceptor';
import { GithubService } from './services/github.service';
import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
 
@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        GithubService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: GithubHttpInterceptor,
          multi: true,
        },
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import from AppModule only.',
      );
    }
  }
}
