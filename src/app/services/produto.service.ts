import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import{ environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    protected db = environment.serverAPI;
    
    constructor(
      protected http: HttpClient
    ) { }
    save(produtos:Produto){
  //this.usuarios.push(usuario);
  return this.http.post(this.db + "produtos", produtos);
    }
    getALL(){
      return this.http.get(this.db + "produtos");
    }
}
