import { Component, OnInit, OnDestroy, Inject, HostListener, ElementRef } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Meta, Title } from '@angular/platform-browser';

import { LandingPagesService, UtilitiesService, MemberManagementService, WatchersService } from '../../../../services';
import { IUser, User, IConfigurationType, ILanguage, ISigninDataModel } from '../../../../models';
import { OG_TAGS, FLAG_IMAGE, NAVIGATION, DEFAULT_PROFILE_IMAGE, LINE, DRIVEMATE_LOGO, STATIC_BASE_URL } from '../../../../constants';
import { Configurations, LanguageType, RentalCategories, LookupType, ConfigurationTypes } from '../../../../enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
  language: string;
  flag: string = '';
  languages: ILanguage[] = [];
  isLoggedIn = false;
  user: IUser = new User();
  visibility = true;
  pageSwitch = false;
  isCollapsed = true;


  readonly NAVIGATION = NAVIGATION;
  readonly DEFAULT_PROFILE_IMAGE = DEFAULT_PROFILE_IMAGE;
  readonly LINE = LINE;
  readonly DRIVEMATE_LOGO = DRIVEMATE_LOGO;
  readonly RentalCategories = RentalCategories;
  readonly OG_TAGS = OG_TAGS;
  readonly STATIC_BASE_URL = STATIC_BASE_URL;
  readonly FLAG_IMAGE =  FLAG_IMAGE;
  readonly LanguageType = LanguageType;

  phone: string = 'tel:' + OG_TAGS.PHONE;

  subscription: Subscription;

  constructor(
    private localize: LocalizeRouterService,
    private location: Location,
    private meta: Meta,
    private router: Router,
    private title: Title,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private landingPagesService: LandingPagesService,
    private utilitiesService: UtilitiesService,
    private _elementRef: ElementRef,
    private memberManagementService: MemberManagementService,
    private watchersService: WatchersService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.checkSwitchRoute();

        if (event.url !== '/' && event.url !== '/en' && event.url !== '/zh-cn') {
          const existingLinkEl = this.document.getElementById('style') as HTMLLinkElement;
          if (!existingLinkEl) {
            const head = this.document.getElementsByTagName('head')[0];
            const link = this.document.createElement('link');
            link.id = 'style';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'style.min.css';
            head.appendChild(link);
          }

        }
      }
    });

    this.subscription = this.translate.onLangChange.subscribe((language: any) => { this.changeLanguage(language.lang); });
    this.loadLanguages();

    this.title.setTitle(this.translate.instant('OG_TAGS.OG_TITLE'));
    this.meta.addTags([
      { property: 'og:title', content: this.translate.instant('OG_TAGS.OG_TITLE') },
      { property: 'og:description', content: this.translate.instant('OG_TAGS.OG_DESCRIPTION') },
    ]);

    this.meta.updateTag({ name: 'keywords', content: this.translate.instant('OG_TAGS.KEYWORDS') });
    this.meta.updateTag({ name: 'description', content: this.translate.instant('OG_TAGS.OG_DESCRIPTION') });

    this.memberManagementService.user$.subscribe((user: IUser) => {
      this.user = user;
      if (Configurations.ACCESS_TOKEN in localStorage) {
        this.isLoggedIn = true;
        this.language = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
      } else {
        this.isLoggedIn = false;
        this.language = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
      }
    });

    if (Configurations.ACCESS_TOKEN in localStorage) {
      this.loadUserData();
    }
    this.watchersService.isMenuVisibilityOnTop.subscribe((visibility: boolean) => this.visibility = visibility);
    this.changeLanguageFlag(this.defaultLang);
  }

  loadLanguages = async () => {
    const response: IConfigurationType[] = await this.landingPagesService.getLookups(LookupType.LANGUAGE, LookupType.LANGUAGE) as IConfigurationType[];
    const languages = this.utilitiesService.getConfigurationTypeValue(response, ConfigurationTypes.Languages);
    this.languages = languages.map(obj => ({ code: obj.code, displayName: obj.displayName, id: obj.code === LanguageType.ENGLISH ? 2 : obj.code === LanguageType.THAI ? 1 : 3}));
  }

  loadUserData = async () => {
    const signinDataModel = await this.memberManagementService.getMemberDetails() as ISigninDataModel;
    this.memberManagementService.getMemberDetailsById(signinDataModel.userID, true);
  }

  // switchLanguage = (language: string) => {
  //   this.language = language;
  //   this.localize.changeLanguage(this.defaultLang);
  //   this.changeLanguageFlag(language);
  // }

  changeLanguage = (language: string) => {
    this.language = language;
    // this.localize.changeLanguage(language);
    const getPath = window.location.pathname.split('/');
    let redirectURL = '';
    if(getPath.length > 3) {
      if(getPath[3] != '') {
        redirectURL = `${getPath[2]}/${getPath[3]}`;
      } else {
        redirectURL = `${getPath[2]}`;
      }
      if(this.language != 'th') {
        window.location.href = `${window.location.origin}/${language}/${redirectURL}`
      } else {
        window.location.href = `${window.location.origin}/${redirectURL}`
      }
    } else {
      if(getPath[2] != '') {
        redirectURL = `${getPath[1]}/${getPath[2]}`;
      } else {
        redirectURL = `${getPath[1]}`;
      }
      if(this.language != 'th') {
        window.location.href = `${window.location.origin}/${language}/${redirectURL}`
      } else {
        window.location.href = `${window.location.origin}/${redirectURL}`
      }
    }
    // this.changeLanguageFlag(language);
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

  logoutClicked = () => {
    this.memberManagementService.signOut();
    const translatedPath: any = this.localize.translateRoute(NAVIGATION.HOME);
    this.router.navigate([translatedPath]);
    window.location.href  = window.location.origin;
  }

  ngOnDestroy = (): void => {
    this.memberManagementService.user$.unsubscribe();
    this.subscription.unsubscribe();
  }

  checkSwitchRoute = () => {
    const currentRentCat = this.location.path().split('/');
    const isContainRentCat = (el) => (el === 'switch');
    const switchPageFound = currentRentCat.find(isContainRentCat);
    if (switchPageFound) {
      this.pageSwitch = true;
    } else {
      this.pageSwitch = false;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickEvent(event: any) {
    const clickedoutside = this._elementRef.nativeElement.contains(event.target);
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.classList.contains('SHOWHIDE')) {
      this.isCollapsed = !this.isCollapsed;
    } else if (target.classList.contains('NAV_LINK')) {
      this.isCollapsed = true;
    } else if (!clickedoutside) {
      this.isCollapsed = true;
    }
  }

}
