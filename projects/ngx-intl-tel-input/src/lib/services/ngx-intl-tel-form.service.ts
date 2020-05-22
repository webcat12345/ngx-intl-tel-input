import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class NgxIntlTelFormService {

  private readonly _submitted$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly submitted$: Observable<boolean> = this._submitted$.asObservable();

  submit(): void {
    this._submitted$.next(true);
  }
}
