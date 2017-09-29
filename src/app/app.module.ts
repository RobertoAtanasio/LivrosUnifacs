import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PaginaInicialPage }      from '../pages/pagina-inicial/pagina-inicial';
import { ListaDeLivrosPage }      from '../pages/lista-de-livros/lista-de-livros';
import { CadastroDeLivrosPage }   from '../pages/cadastro-de-livros/cadastro-de-livros';
import { TabsControllerPage }     from '../pages/tabs-controller/tabs-controller';
import { ListaDeGenerosPage }     from '../pages/lista-de-generos/lista-de-generos';
import { CadastroDeGenerosPage }  from '../pages/cadastro-de-generos/cadastro-de-generos';
import { EditoraPage }            from '../pages/editora/editora';
import { CadastroEditoraPage }    from '../pages/cadastro-editora/cadastro-editora';
import { HttpModule } from '@angular/http';

import { GeneroPage } from '../pages/genero/genero';
import { FormGeneroPage } from '../pages/form-genero/form-genero';
//import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditoraProvider } from '../providers/editora/editora';
import { LivroProvider } from '../providers/livro/livro';

@NgModule({
  declarations: [
    MyApp,
    PaginaInicialPage,
    ListaDeLivrosPage,
    CadastroDeLivrosPage,
    TabsControllerPage,
    ListaDeGenerosPage,
    CadastroDeGenerosPage,
    EditoraPage,
    CadastroEditoraPage,
    GeneroPage,
    FormGeneroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaginaInicialPage,
    ListaDeLivrosPage,
    CadastroDeLivrosPage,
    TabsControllerPage,
    ListaDeGenerosPage,
    CadastroDeGenerosPage,
    EditoraPage,
    CadastroEditoraPage,
    GeneroPage,
    FormGeneroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EditoraProvider,
    LivroProvider
  ]
})
export class AppModule {}
