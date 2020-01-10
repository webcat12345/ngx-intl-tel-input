import {ElementRef, Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {Observable, Subject} from 'rxjs';
import {Country} from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class NgxDropdownService {

  private _overlayRef: OverlayRef;

  private readonly _onMenuClose: Subject<void> = new Subject<void>();

  readonly onMenuClose: Observable<void> = this._onMenuClose.asObservable();

  constructor(private readonly overlay: Overlay) {
  }

  openFromTemplate<T>(
    template: TemplateRef<T>,
    connectedElementRef: ElementRef,
    viewContainerRef: ViewContainerRef,
    configOptions: OverlayConfig = {}
  ): void {
    const config = this._createConfig(configOptions, connectedElementRef);
    this._overlayRef = this.overlay.create(config);
    const templatePortal: TemplatePortal<T> = new TemplatePortal(template, viewContainerRef);
    this._overlayRef.attach(templatePortal);
    this._overlayRef.backdropClick().subscribe(() => {
      this.close();
    });
  }

  private _createPosition(elementRef: ElementRef): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(elementRef)
      .withPositions([
        {originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top'}
      ])
      .withPush(false);
  }

  private _createConfig(config: OverlayConfig, connectedElementRef: ElementRef): OverlayConfig {
    return {
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this._createPosition(connectedElementRef),
      scrollStrategy: this.overlay.scrollStrategies.reposition({scrollThrottle: 0}),
      ...config,
    };
  }

  close(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._onMenuClose.next();
    }
  }

  scrollToCountry(country: Country): void {
    if (!country.iso2 || !this._overlayRef) {
      return;
    }
    const countryElement = this._overlayRef.overlayElement.querySelector(`#${country.iso2}`);
    if (countryElement) {
      countryElement.scrollIntoView();
    }
  }
}
