import { Component } from '@angular/core';
import { ThemeSwitcherService } from './../theme-switcher.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nightTheme: boolean;
  constructor(public themeSwitcher: ThemeSwitcherService) {}

  OnInit() {}

  ionViewWillEnter() {
    // Set up the theme button so it reflects what the user last set.
    if (localStorage.getItem('theme') !== null) {
      this.nightTheme = JSON.parse(localStorage.getItem('theme'));
    } else {
      this.nightTheme = false;
    }
  }

  // When the updateTheme switch is triggered then change the current theme variables
  onUpdateChangeTheme($event) {
    this.nightTheme = $event.detail.checked;
    localStorage.setItem('theme', $event.detail.checked);
    if (this.nightTheme === true) {
      this.themeSwitcher.setTheme('nighttime');
    } else {
      this.themeSwitcher.setTheme('daytime');
    }
  }
}
