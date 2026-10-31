import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from '../../servicos/produto';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-produto.html',
  styleUrl: './cadastro-produto.css'
})
export class CadastroProduto {

  produto = {
    produto: '',
    descricao: '',
    foto: '',
    preco: 0
  };

  constructor(
    private produtoService: Produto,
    private router: Router
  ) {}

  salvarProduto(): void {
    this.produtoService.adicionarProduto(this.produto).subscribe({
      next: () => {
        alert('Produto cadastrado com sucesso!');
        this.router.navigate(['/painel-principal']);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar:', erro);
        alert('Erro ao cadastrar produto!');
      }
    });
  }
}
