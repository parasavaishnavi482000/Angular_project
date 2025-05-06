import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          
          errorMessage = `Client Error: ${error.error.message}`;
        } else {
          
          errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
        }
        alert(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
