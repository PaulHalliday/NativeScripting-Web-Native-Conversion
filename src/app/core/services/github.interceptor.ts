import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/do';

@Injectable()
export class GithubHttpInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

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
          const snackBarRef = this.snackBar.open(error.message, '', {
            duration: 3000,
          });
        }
      },
    );
  }
}
