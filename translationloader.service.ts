import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale
{
    lang: string;
    data: Object;
}

@Injectable({
    providedIn: 'root'
})
export class TranslationLoaderService
{
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
  private langIds: any = [];

    constructor(
        private translate: TranslateService

    ) {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    }  

    loadTranslations(...args: Locale[]): void
    {
        const locales = [...args];

        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);

        });
      this.translate.addLangs(this.langIds);
    }

     getInstantValue(string: any)
    {
      return this.translate.instant(string);
    }

}
