import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import{ environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Array<Produto> = [

    ];
    protected db = environment.serverAPI;
    
    constructor(
      protected http: HttpClient
    ) { }
    save(produto:Produto){
  //this.usuarios.push(usuario);
  return this.http.post(this.db + "produtos", produto);
    }
    getALL(){
      return this.http.get(this.db + "produtos");
    }
}
