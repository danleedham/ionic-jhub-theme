/* This Service allows the user to switch themes.
/ It achieves this by inserting certain theme CSS variables in the document when a theme is chosen
/ Based on: https://www.joshmorony.com/creating-a-theme-switcher-service-in-ionic-using-css4-variables/
*/

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  private themes: Theme[] = [];

  constructor(
    private domCtrl: DomController,
    @Inject(DOCUMENT) private document
  ) {
    this.themes = [
      {
        name: 'daytime',
        styles: [
          { themeVariable: '--ion-background-color', value: '#4cbaff'},
          { themeVariable: '--ion-background-color-rgb', value: '#4cbaff'},
          { themeVariable: '--ion-color-tab1-bg', value: '#4cbaff' },
          { themeVariable: '--ion-color-tab2-bg', value: '#0099ff' },
          { themeVariable: '--ion-color-tab3-bg', value: '#006ab0' },
          { themeVariable: '--ion-color-tab1-white-bg', value: '#ffffff' },
          { themeVariable: '--ion-color-tab1-offwhite-bg', value: '#f2f2f2' },
          { themeVariable: '--ion-color-tab1-labels', value: '#fff' },
          { themeVariable: '--ion-item-ios-background-color', value: '#ffffff' },
          { themeVariable: '--ion-item-md-background-color', value: '#ffffff' },
          { themeVariable: '--ion-tabbar-background-color', value: '#fff' },
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#000000' },
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#000000' },
          { themeVariable: '--ion-background-color', value: '#ffffff' },
          { themeVariable: '--ion-color-light', value: '#f4f5f8' },
          { themeVariable: '--ion-color-light-rgb', value: '244,244,244' },
          { themeVariable: '--ion-color-dark', value: '#222428' },
          { themeVariable: '--ion-color-dark-rgb', value: '34,34,34' },
          { themeVariable: '--ion-text-color', value: 'var(--ion-color-dark)' },
          { themeVariable: '--ion-text-color-rgb', value: 'var(--ion-color-dark-rgb)' },
          { themeVariable: '--highlight-color-focused', value: 'var(--ion-text-color)'},
          { themeVariable: '--ion-color-alert-text', value: '#000000' },
          { themeVariable: '--ion-color-step-50', value: '#f2f2f2' },
          { themeVariable: '--ion-color-step-100', value: '#e6e6e6' },
          { themeVariable: '--ion-color-step-150', value: '#d9d9d9' },
          { themeVariable: '--ion-color-step-200', value: '#cccccc' },
          { themeVariable: '--ion-color-step-250', value: '#bfbfbf' },
          { themeVariable: '--ion-color-step-300', value: '#b3b3b3' },
          { themeVariable: '--ion-color-step-350', value: '#a6a6a6' },
          { themeVariable: '--ion-color-step-400', value: '#999999' },
          { themeVariable: '--ion-color-step-450', value: '#8c8c8c' },
          { themeVariable: '--ion-color-step-500', value: '#808080' },
          { themeVariable: '--ion-color-step-550', value: '#737373' },
          { themeVariable: '--ion-color-step-600', value: '#666666' },
          { themeVariable: '--ion-color-step-650', value: '#595959' },
          { themeVariable: '--ion-color-step-700', value: '#4d4d4d' },
          { themeVariable: '--ion-color-step-750', value: '#404040' },
          { themeVariable: '--ion-color-step-800', value: '#333333' },
          { themeVariable: '--ion-color-step-850', value: '#262626' },
          { themeVariable: '--ion-color-step-900', value: '#1a1a1a' },
          { themeVariable: '--ion-color-step-950', value: '#0d0d0d' },
          { themeVariable: '--ion-color-step-1000', value: '#000000' }
        ]
      },
      {
        name: 'nighttime',
        styles: [
          { themeVariable: '--ion-color-tab1-bg', value: '#545353' },
          { themeVariable: '--ion-color-tab2-bg', value: '#878787' },
          { themeVariable: '--ion-color-tab3-bg', value: '#cfcfcf' },
          { themeVariable: '--ion-color-tab1-white-bg', value: '#2b2c2e' },
          { themeVariable: '--ion-color-tab1-offwhite-bg', value: '#191919' },
          { themeVariable: '--ion-color-tab1-labels', value: '#28FE14' },
          { themeVariable: '--ion-color-light', value: '#28FE14' },
          { themeVariable: '--ion-color-light-rgb', value: '40,254,20' },
          { themeVariable: '--ion-border-color', value: 'var(--ion-color-dark-shade)' },
          { themeVariable: '--ion-text-color', value: 'var(--ion-color-light)' },
          { themeVariable: '--ion-text-color-rgb', value: 'var(--ion-color-light-rgb)' },
          { themeVariable: '--highlight-color-focused', value: 'var(--ion-text-color)'},
          { themeVariable: '--ion-item-ios-background-color', value: '#717171'},
          { themeVariable: '--ion-item-md-background-color', value: '#717171' },
          { themeVariable: '--ion-tabbar-background-color', value: '#222428' },
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff' },
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff' },
          { themeVariable: '--ion-background-color', value: 'var(--ion-color-dark)'},
          { themeVariable: '--ion-background-color-rgb', value: 'var(--ion-color-dark-rgb)' },
          { themeVariable: '--ion-color-alert-text', value: '#28fe14' },
          { themeVariable: '--ion-color-step-50', value: '#232323' },
          { themeVariable: '--ion-color-step-100', value: '#2e2e2e' },
          { themeVariable: '--ion-color-step-150', value: '#3a3a3a' },
          { themeVariable: '--ion-color-step-200', value: '#454545' },
          { themeVariable: '--ion-color-step-250', value: '#515151' },
          { themeVariable: '--ion-color-step-300', value: '#5d5d5d' },
          { themeVariable: '--ion-color-step-350', value: '#8b8b8b' },
          { themeVariable: '--ion-color-step-400', value: '#747474' },
          { themeVariable: '--ion-color-step-450', value: '#7f7f7f' },
          { themeVariable: '--ion-color-step-500', value: '#8b8b8b' },
          { themeVariable: '--ion-color-step-550', value: '#979797' },
          { themeVariable: '--ion-color-step-600', value: '#a2a2a2' },
          { themeVariable: '--ion-color-step-650', value: '#aeaeae' },
          { themeVariable: '--ion-color-step-700', value: '#b9b9b9' },
          { themeVariable: '--ion-color-step-750', value: '#c5c5c5' },
          { themeVariable: '--ion-color-step-800', value: '#d1d1d1' },
          { themeVariable: '--ion-color-step-850', value: '#dcdcdc' },
          { themeVariable: '--ion-color-step-900', value: '#e8e8e8' },
          { themeVariable: '--ion-color-step-950', value: '#f3f3f3' },
          { themeVariable: '--ion-color-step-1000', value: '#ffffff' }
        ]
      }
    ];
  }

  setTheme(name): void {
    if (name === false) {
      name === 'nighttime';
    }
    let theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {
      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(
          style.themeVariable,
          style.value
        );
      });
    });
  }
}
