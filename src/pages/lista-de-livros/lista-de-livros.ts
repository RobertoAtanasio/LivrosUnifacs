import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { CadastroDeLivrosPage } from '../cadastro-de-livros/cadastro-de-livros';
import { LivroProvider } from '../../providers/livro/livro';

@Component({
  selector: 'page-lista-de-livros',
  templateUrl: 'lista-de-livros.html'
})
export class ListaDeLivrosPage {
   listaLivros : Array <any>;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private livroService: LivroProvider
  ) {
    this.listaLivros = this.livroService.getListLivro();
  }

  abreFormLivros(params){
    this.modalCtrl.create(CadastroDeLivrosPage).present();
  }

  editarLivro(livro){
    let modal = this.modalCtrl.create (CadastroDeLivrosPage, {livro : livro});
     //modal.onDidDismiss (() => this.livroService.getListLivro());
     modal.present ();
  }

  removerLivro (livro : any) {
     let confirm = this.alertCtrl.create({
       title: 'Excluir livro',
       message: 'Confirma a exclusão do livro: ' + livro.titulo + '?',
       buttons: [
         {
           text: 'Cancelar',
         },
         {
           text: 'Excluir',
           handler: () => {
             let index = this.listaLivros.indexOf(livro);
             if(index>-1){
                this.listaLivros.splice(index,1);
             }
           }
         }
       ]
     });
     confirm.present();
   }

  goToCadastroEditora(params){
    let modal = this.modalCtrl.create (CadastroDeLivrosPage);
    modal.onDidDismiss (() => this.livroService.getListLivro());
    modal.present ();
  }

}
