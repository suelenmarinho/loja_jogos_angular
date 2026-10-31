import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produto } from '../../servicos/produto';

@Component({
  selector: 'app-painel-principal',
  standalone: true,
  imports: [],
  templateUrl: './painel-principal.html',
  styleUrl: './painel-principal.css'
})
export class PainelPrincipal implements OnInit {

  produtos: any[] = [];

  constructor(
    private produtoService: Produto,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (dados) => {
        console.log('Produtos recebidos:', dados);
        this.produtos = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos:', erro);
      }
    });
  }
}
