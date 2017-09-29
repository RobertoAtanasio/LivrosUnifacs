import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { EditoraPage } from '../editora/editora';
import { EditoraProvider } from '../../providers/editora/editora';

@Component({
  selector: 'page-cadastro-editora',
  templateUrl: 'cadastro-editora.html'
})

export class CadastroEditoraPage {
   editora : any;
   ListaEditoras : Array <any>;
   Lista= [];
   editorasList:EditoraPage;
   arrayEditoraProvider: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private editoraService:EditoraProvider

  ) {
    this.editora = navParams.get('editora') || {};
  }
  voltaPagina() {
    this.navCtrl.pop ();
  }

  salvar(e) {

    this.arrayEditoraProvider=this.editoraService.getListEditora();
      if (this.editora.id == undefined) {
        //pegar a lista do provaider
        this.editora.id = this.arrayEditoraProvider.length+1;
        this.editoraService.inseritem(this.editora);
        console.log(this.editoraService.getListEditora());
        this.navCtrl.pop ();

     } else { // Atualizando
        let index = this.arrayEditoraProvider.indexOf(this.editora);
        console.log(index);
        this.navCtrl.pop ();
        if(index>-1){
          this.editoraService.updateEditora(this.editora,index);
        }

     }
  }
}
