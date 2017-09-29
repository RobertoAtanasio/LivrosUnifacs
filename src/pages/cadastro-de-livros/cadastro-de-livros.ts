import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaDeLivrosPage } from '../lista-de-livros/lista-de-livros';
import { LivroProvider } from '../../providers/livro/livro';
import { EditoraProvider } from '../../providers/editora/editora';

@Component({
  selector: 'page-cadastro-de-livros',
  templateUrl: 'cadastro-de-livros.html'
})

export class CadastroDeLivrosPage {
  livro : any;
  listaLivros : Array <any>;
  listaEditoras : Array <any>;
  lista= [];
  livrosList: ListaDeLivrosPage;
  arrayLivroProvider: any;
 constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   private livroService: LivroProvider,
   private editoraService: EditoraProvider

 ) {
   this.livro = navParams.get('livro') || {};
   this.listaEditoras = this.editoraService.getListEditora();

 }

 voltarPagina() {
   this.navCtrl.pop ();
 }

 salvar(livro) {
   this.arrayLivroProvider=this.livroService.getListLivro();

   if (this.livro.id == undefined) {  //Adicionar livro

     this.livro.id = this.arrayLivroProvider.length+1;
     this.livro.img = "assets/img/livro_default.png";
     this.livroService.inseritem(this.livro);

     this.navCtrl.pop ();

  } else {  //Alterar livro
    let index = this.arrayLivroProvider.indexOf(this.livro);
    this.navCtrl.pop ();
    if(index>-1){
       this.livroService.updateLivro(this.livro,index);
    }
  }

 }
}
