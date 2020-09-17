import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

declare var admob

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;
  statusBar: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, ) {
    platform.ready().then(() => {
      //chamando funcoens
      this.showBanner()

      // funcao para exibir propagando em um determinado tempo apos inicializacao do app
      let self = this;
      setInterval(
        function(){
          self.launchRewardedVideo()
        },
        90*1000
      )

      this.statusBar.backgroundColorByHexString('#222')

      splashScreen.hide();
    });
  }

  //funcao para exibir baner
  showBanner() {
    let bannerConfig = {
      id: 'ca-app-pub-6593929850579275/3434564279',// id admob
      isTesting: false,
      autoShow: true,
      size: 'IAB_BANNER'
    };

    admob.banner.config(bannerConfig);

    admob.banner.prepare().then(() => {

    }).catch(e => console.log(e));

  }

  launchRewardedVideo() {
    let interstitialConfig = {
      id: 'ca-app-pub-6593929850579275/4556074258',
      isTesting: false,
      autoShow: true,
    };

    admob.interstitial.config(interstitialConfig);

    admob.interstitial.prepare().then(() => {

    });

  }

}

