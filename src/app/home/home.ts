import { Component } from '@angular/core';
import { DadosService } from '../service/dados';
import { Empresa, Funcionario } from '../models/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {


   constructor(private dadosService: DadosService ){}

   colaboradores?: Array<Funcionario>;

   funcionarioSelecionado?: any;

   empresas?: Array<Empresa>;

   empresaSelecionada?: any;

   ngOnInit(){
      this.colaboradores = this.dadosService.getFuncionario();

      this.empresas = this.dadosService.getEmpresa();
   }
}
