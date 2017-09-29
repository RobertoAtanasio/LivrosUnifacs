import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { EditoraProvider } from '../providers/editora/editora';
import { LivroProvider } from '../providers/livro/livro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TabsControllerPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public editoraservice :EditoraProvider,
    public livroservice :LivroProvider,
  ) {
    platform.ready().then(() => {
      //carrega o array quando iniciar o  aplicativo
      editoraservice;
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }

}
