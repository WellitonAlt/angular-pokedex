import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ErrorData {

  protected readonly error$ = new Subject<string | undefined>();

  protected handleError(error: HttpErrorResponse): void {
    // Handle specific error cases
    if (error.status === 404 && error.url) {
      this.error$.next(`Failed to load pokemon for /r/${error.url.split('/')[4]}`);

      return;
    }

    // Generic error if no cases match
    this.error$.next(error.statusText);
  }

}
