import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LivroProvider {
  public   LivrosServices:  any
  constructor(public http: Http) {
  this.LivrosServices=this.loadLivro();
  }

  //carrega os dados  das livros.
  loadLivro(){
  let ListaLivro=[
	{
    "id": "1",
		"titulo":"Origem",
		"isbn":"9788580417661",
		"editora":"Arqueiro",
		"autor":"Dan Brown",
		"num_paginas":"432",
		"preco":"39.90",
		"genero":"Romance",
    "img": "assets/img/origem.png"
	},
	{
    "id": "2",
		"titulo":"O Rei do Inverno",
		"isbn":"850106114X",
		"editora":"Record",
		"autor":"Bernard Cornwel",
		"num_paginas":"544",
		"preco":"31.90",
		"genero":"Aventura",
    "img": "assets/img/O_Rei_do_Inverno.jpg"
	},
	{
    "id": "3",
		"titulo":"O Mínimo Que Você Precisa Saber Para Não Ser Um Idiota",
		"isbn":"9788501402516",
		"editora":"Record",
		"autor":"Olavo de Carvalho",
		"num_paginas":"616",
		"preco":"43.27",
		"genero":"Política e atualidades",
    "img": "assets/img/O_Minimo_que_Voce_Precisa_Saber_Para_Nao_Ser_Um_Idiota.png"
	},
	{
    "id": "4",
		"titulo":"The Amityville Horror",
		"isbn":"9788501402516",
		"editora":"Pocket Books Usa",
		"autor":"Jay Anson",
		"num_paginas":"239",
		"preco":"19.72",
		"genero":"Terror",
    "img": "assets/img/The_Amityville_Horror.jpg"
	},
	{
    "id": "4",
		"titulo":"1984",
		"isbn":"9788535914849",
		"editora":"Companhia das Letras",
		"autor":"George Orwell",
		"num_paginas":"239",
		"preco":"35.90",
		"genero":"Romance",
    "img": "assets/img/1984.jpg"
	},
  {
    "id": "5",
		"titulo":"A Mente Esquerdista - As Causas Psicológicas da Loucura Política",
		"isbn":"9788567394879",
		"editora":"Vide Editorial",
		"autor":"Rossiter, Lyle H.",
		"num_paginas":"500",
		"preco":"39.90",
		"genero":"Política e atualidades",
    "img": "assets/img/A_Mente_Esquerdista.jpg"
	},
  ];
  return ListaLivro;

  }

  getListLivro(){
    return this.LivrosServices;
  }
  inseritem(item:any){
    this.LivrosServices.push(item);
  }
  updateLivro(imtemArray,index){
    this.LivrosServices[index].titulo=imtemArray.titulo;
    this.LivrosServices[index].isbn=imtemArray.isbn;
    this.LivrosServices[index].editora=imtemArray.editora;
    this.LivrosServices[index].autor=imtemArray.autor;
    this.LivrosServices[index].num_paginas=imtemArray.num_paginas;
    this.LivrosServices[index].preco=imtemArray.preco;
    this.LivrosServices[index].genero=imtemArray.genero;
    this.LivrosServices[index].capa_grossa=imtemArray.capa_grossa;
    this.LivrosServices[index].img=imtemArray.img;

  }
}
