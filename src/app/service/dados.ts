import { Injectable } from '@angular/core';
import { Funcionario, Empresa } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  constructor() { }

  getFuncionario(): Array<Funcionario> {
    var funcionario: Array<Funcionario> = [

      {
        name: "Jardel Oliveira",
        cpf: "000.000.000-50"

      },
      {
        name: "Aniele Carvalho",
        cpf: "000.000.000-60"

      },
    ]

    return funcionario;
  }

  getEmpresa(): Array<Empresa> {
    var empresa: Array<Empresa> = [

      {
        name: "Ambev Dilemos",
        cnpj: "00.000.000/0001-80",
        endereco: "Rua 10, N° 2020, São Felix, Balsas - Ma,"
      },
      {
        name: "Ambev Dilemos II",
        cnpj: "00.000.000/0001-60",
        endereco: "Av Tiradentes, N° 102, Porto Franco - Ma."
      }

    ]

    return empresa
  }

}



