import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor: number = 0;
  memoria: number = 0;
  operacao: string = "";
  ponto:string="";

  constructor() {}

click_button(parametro: string){
  this.valor = Number(""+this.valor+this.ponto+parametro);
  this.ponto="";
}


click_outros (parametro: string){
  if (parametro == "+-"){ 
    this.valor = (this.valor * -1);
  } else if (parametro == ","){ 
   if (!(String(this.valor).indexOf(".")>0))  {
      this.ponto=".";
   }
    } else if (parametro == "c") {  
      this.valor= 0;
  this.memoria = 0;
  this.operacao = "";
  this.ponto ="";
  } 
}



calcula(tipo:string){
  if (this.operacao == "") {
    this.memoria = this.valor
  }
  else if (this.operacao == "+") {
    this.memoria = this.memoria + this.valor 
  }
  else if (this.operacao == "-") {
    this.memoria = this.memoria -  this.valor 
  }
  else if (this.operacao == "/") {
    this.memoria = this.memoria / this.valor 
  }
  else if (this.operacao == "*") {
    this.memoria = this.memoria * this.valor 
  }
  if (tipo=="="){
    this.valor=this.memoria;
    this.memoria=0;
    this.operacao="";
  }
    else {
    this.operacao=tipo;
    this.valor=0;
  }
  
}


}

