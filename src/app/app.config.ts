import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, Injectable, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { provideRouter, RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';


@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const routerTitle = this.buildTitle(routerState);

    let title = 'Angular - Pokedex';

    title = routerTitle === undefined
      ? title
      : `${title} | ${title}`;

    this.title.setTitle(title);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
};
