// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../service/curriculos.service';
import { Curriculo } from '../model/curriculo.model';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css'],
})
export class CurriculosComponent implements OnInit {
  public curriculos: Curriculo[] = []; // Uma matriz para armazenar as curriculos
  constructor(private _curriculosService: CurriculoService) {}
  // Injeta o serviço de curriculos no construtor do componente
  ngOnInit(): void {
    this.listarCurriculos();
    // Executa a função de listagem de curriculos quando é inicializado
  }
  // Função para listar as curriculos
  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        // Mapeia os dados retornados para o modelo Curriculo
        return new Curriculo(
          item.id,
          item.nome,
          item.email,
          item.telefone,
          item.endereco,
          item.formacaoAcademica
        );
      });
    });
  }
}
