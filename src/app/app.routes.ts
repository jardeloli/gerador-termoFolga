import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { CadastroComponent } from './cadastro/cadastro';

export const routes: Routes = [
    {path: 'inicio', title: 'Inicio', component: HomeComponent},
    {path: 'cadastro', title: 'Cadastro', component: CadastroComponent}
];
