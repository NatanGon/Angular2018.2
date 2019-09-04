import { Component, OnInit } from '@angular/core';
import{ ProdutoService } from '../../services/produto.service';
@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
