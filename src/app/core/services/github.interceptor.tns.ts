import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import * as Toast from 'nativescript-toast';

import 'rxjs/add/operator/do';

@Injectable()
export class GithubHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'token YOUR-API-TOKEN',
      ),
    });

    return next.handle(newRequest).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Yay!');
        }
      },
      (error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          const toast = Toast.makeText(error.message, "long").show();
        }
      },
    );
  }
}
