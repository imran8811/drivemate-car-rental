import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { LookupType, ConfigurationTypes, LanguageType, Configurations } from '../../../../enums';
import { FLAG_IMAGE, NAVIGATION, STATIC_BASE_URL } from '../../../../constants';
import { ILanguage, IConfigurationType } from '../../../../models';
import { UtilitiesService, LandingPagesService, MemberManagementService } from '../../../../services';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
  readonly NAVIGATION = NAVIGATION;
  readonly STATIC_BASE_URL = STATIC_BASE_URL;
  readonly LanguageType = LanguageType;
  readonly FLAG_IMAGE = FLAG_IMAGE;
  subscription: Subscription;
  language: string;
  langCode = '';
  languages: ILanguage[] = [];
  flag: string;

  constructor( private landingPagesService: LandingPagesService,
               private utilitiesService: UtilitiesService,
               private translate: TranslateService,
               private localize: LocalizeRouterService,
               private memberManagementService: MemberManagementService,
               ) { }

  ngOnInit() {
    this.language = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
     this.loadLanguages();
     this.langCode = this.translate.defaultLang;
     this.subscription = this.translate.onLangChange.subscribe((language: any) => {
       this.switchLanguage(language.lang);
    });
    this.changeLanguageFlag(this.defaultLang);
  }

  loadLanguages = async () => {
    const response: IConfigurationType[] = await this.landingPagesService.getLookups(LookupType.LANGUAGE, LookupType.LANGUAGE) as IConfigurationType[];
    const languages = this.utilitiesService.getConfigurationTypeValue(response, ConfigurationTypes.Languages);
    this.languages = languages.map(obj => ({ code: obj.code, displayName: obj.displayName, id: obj.code === LanguageType.ENGLISH ? 2 : obj.code === LanguageType.THAI ? 1 : 3}));

  }

  switchLanguage = (language: string) => {
    this.langCode = language;
    this.localize.changeLanguage(language);
    if (Configurations.ACCESS_TOKEN in localStorage) {
      this.updateUserLanguage();
    }
    this.changeLanguageFlag(language);
  }

  changeLanguage = (language: string) => {
    
    this.language = language;
    this.localize.changeLanguage(language);
    this.defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
    this.changeLanguageFlag(language);

  }

  changeLanguageFlag = (language: string) => {

    if (language === LanguageType.ENGLISH) {
      this.flag = FLAG_IMAGE.ENGLISH;
    } else if (language === LanguageType.THAI) {
      this.flag = FLAG_IMAGE.THAI;
    } else if (language === LanguageType.CHINESE_FULL) {
      this.flag = FLAG_IMAGE.CHINESE;
    }

  }

  updateUserLanguage = () => {
    const index = this.languages.findIndex(x => x.code === this.language);
    if (index !== -1) {
      this.memberManagementService.updateUserDefaultLanguage(this.languages[index].code, this.languages[index].displayName);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
