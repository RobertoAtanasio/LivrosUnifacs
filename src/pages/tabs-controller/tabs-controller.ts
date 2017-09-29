import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneroPage } from '../genero/genero';
import { EditoraPage } from '../editora/editora';
import { CadastroEditoraPage } from '../cadastro-editora/cadastro-editora';
import { PaginaInicialPage } from '../pagina-inicial/pagina-inicial';
import { ListaDeLivrosPage } from '../lista-de-livros/lista-de-livros';



@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PaginaInicialPage;
  tab2Root: any = ListaDeLivrosPage;
  tab3Root: any = EditoraPage;
  tab4Root: any = GeneroPage;
  constructor(public navCtrl: NavController) {
  }
  goToListaDeGeneros(params){
    if (!params) params = {};
    this.navCtrl.push(GeneroPage);
  }
  goToEditora(params){
    if (!params) params = {};
    this.navCtrl.push(EditoraPage);
  }
  goToPaginaInicial(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaInicialPage);
  }
}
