import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

// import { LanguageType } from './enums';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

export function defaultLangOverride() {
  const checkLang = window.location.pathname.split('/');
  const matchLang = (el) => ((el === 'en') || (el === 'th') || (el === 'zh-cn'));
  let langFound = checkLang.find(matchLang);
  langFound = langFound != undefined? langFound : 'th';
  return langFound;
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/car-rental/car-rental.module').then(module => module.CarRentalModule),
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      defaultLangFunction: defaultLangOverride,
      alwaysSetPrefix: false
    }),
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
