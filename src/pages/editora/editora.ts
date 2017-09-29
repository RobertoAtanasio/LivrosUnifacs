import { Component } from '@angular/core';
import {IonicPage, ModalController, AlertController, NavController,NavParams} from 'ionic-angular';
import {CadastroEditoraPage} from '../cadastro-editora/cadastro-editora';
import {EditoraProvider} from '../../providers/editora/editora';

@Component({
  selector: 'page-editora',
  templateUrl: 'editora.html'
})
export class EditoraPage {
   ListaEditoras : Array <any>;
  constructor(
     public navCtrl:        NavController,
     private modalCtrl :    ModalController,
     private alertCtrl :    AlertController,
     private editoraService:EditoraProvider
   ) {
  this.ListaEditoras = this.editoraService.getListEditora();
  }

//abre o modal para editar  a editora
editEditora(e){
  let modal = this.modalCtrl.create (CadastroEditoraPage, {editora : e});
   modal.onDidDismiss (() => this.editoraService.getListEditora());
   modal.present ();
}

//confirmação de exclusão
deleteEditora (e : any) {
   let confirm = this.alertCtrl.create({
     title: 'Exclusão de Editora',
     message: 'Confirma a exclusão da editora: ' + e.nome + '?',
     buttons: [
       {
         text: 'Cancelar',
         handler: () => {
         }
       },
       {
         text: 'Excluir',
         handler: () => {
           this.removeEditora(e);
         }
       }
     ]
   });
   confirm.present();
 }

 //metodo que remove editora da  lista
  removeEditora(e){
    let index = this.ListaEditoras.indexOf(e);
        if(index>-1){
           this.ListaEditoras.splice(index,1);
        }
  }

  //vai para pagina de cadastro
  goToCadastroEditora(params){
    let modal = this.modalCtrl.create (CadastroEditoraPage);
    modal.onDidDismiss (() => this.editoraService.getListEditora());
    modal.present ();
  }

}
