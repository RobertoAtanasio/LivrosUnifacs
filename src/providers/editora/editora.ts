import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EditoraProvider {
  public   EditorasServices:  any
  constructor(public http: Http) {
  this.EditorasServices=this.loadEditora();
  }

  //carrega os dados  das editoras.
  loadEditora(){
  let ListaEditora=[
  {
    nome: "Record",
    endereco: "Rua das Orquideas",
    id:1
  },
  {
    nome: "Ática",
    endereco: "Praça do Sol",
    id:2
  },
  {
    nome: "Átomo & Alínea",
    endereco: "Avenida Mangabeira",
    id:3,
  },
  {
    nome: "Betel",
    endereco: "Rua São Carlos",
    id:4,
  },
  {
    nome: "Olho D’Água",
    endereco: "Rua Martin Luther king",
    id:5,
  },
  {
    nome: "editora pingo de Ouro",
    endereco: "Rua A",
    id:6,
  },
  {
    nome: "Editora Gira Sol",
    endereco: "Rua A",
    id:7,
  },
  {
    nome: "Arqueiro",
    endereco: "Rua B",
    id:8,
  },
  {
    nome: "Pocket Books Usa",
    endereco: "Rua B",
    id:9,
  },
  {
    nome: "Companhia das Letras",
    endereco: "Rua B",
    id:10,
  }
  ]
  return ListaEditora;

  }

  getListEditora(){
    return this.EditorasServices;
  }
  inseritem(item:any){
  this.EditorasServices.push(item);
  }
  updateEditora(imtemArray,index){
    this.EditorasServices[index].nome=imtemArray.nome;
    this.EditorasServices[index].endereco=imtemArray.endereco;

  }
}
