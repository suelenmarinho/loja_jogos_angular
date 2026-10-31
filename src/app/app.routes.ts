import { Routes } from '@angular/router';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';
import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';

export const routes: Routes = [
  { path: '', redirectTo: 'painel-principal', pathMatch: 'full' },
  { path: 'painel-principal', component: PainelPrincipal },
  { path: 'cadastro-produto', component: CadastroProduto }
];
