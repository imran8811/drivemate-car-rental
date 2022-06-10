import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { STATIC_BASE_URL, NAVIGATION } from '../../../../constants';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { MemberManagementService } from '../../../../services';
import { LanguageType } from '../../../../enums';

@Component({
  selector: 'app-user-nav-items',
  templateUrl: './user-nav-items.component.html',
  styleUrls: ['./user-nav-items.component.scss']
})
export class UserNavItemsComponent implements OnInit {
  defaultLang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') ? localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE') : LanguageType.THAI;
  readonly NAVIGATION = NAVIGATION;
  readonly STATIC_BASE_URL = STATIC_BASE_URL;

  constructor(
    private localize: LocalizeRouterService,
    private router: Router,
    private memberManagementService: MemberManagementService,

  ) { }

  ngOnInit() {
  }

  logoutClicked = () => {
    this.memberManagementService.signOut();
    // const translatedPath: any = this.localize.translateRoute(NAVIGATION.HOME);
    // this.router.navigate([translatedPath]);
    window.location.href  = window.location.origin;
  }

}
