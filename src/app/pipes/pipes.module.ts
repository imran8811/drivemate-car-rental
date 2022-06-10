import { NgModule } from '@angular/core';

import { SafeHtmlPipe } from './safe-html/safe-html.pipe';
import { SortByPipe } from './sort/sort-by.pipe';

@NgModule({
  declarations: [SafeHtmlPipe, SortByPipe],
  exports: [SafeHtmlPipe, SortByPipe],
  imports: []
})
export class PipesModule { }
