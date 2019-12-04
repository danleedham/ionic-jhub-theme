import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeSwitcherService } from './theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  chosenTheme: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public themeSwitcher: ThemeSwitcherService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // When the app is initialized, check which theme was last set and apply that
    if (!localStorage.getItem('theme')) {
      this.chosenTheme = 'daytime';
      this.themeSwitcher.setTheme(this.chosenTheme);
      localStorage.setItem('theme', 'false');
    } else {
      const chosenThemeSaved = localStorage.getItem(
        'theme'
      );
      if (chosenThemeSaved === 'false') {
        this.chosenTheme = 'daytime';
      } else {
        this.chosenTheme = 'nighttime';
      }
      this.themeSwitcher.setTheme(this.chosenTheme);
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
