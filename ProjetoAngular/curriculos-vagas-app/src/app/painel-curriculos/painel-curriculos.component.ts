// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../service/curriculos.service';
import { Curriculo } from '../model/curriculo.model';

@Component({
  selector: 'app-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.css'],
})
export class PainelCurriculosComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '', '');
  // Uma instância de 'Curriculo' para rastrear os dados do formulário
  public curriculos: Curriculo[] = [];
  // Uma matriz para armazenar as curriculos listadas
  constructor(private _curriculosService: CurriculoService) {}
  // aplica o serviço 'curriculosService' no construtor
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

listarCurriculo(curriculo: Curriculo) {
// Função para listar uma curriculo individual no formulário para edição
this.curriculo = Curriculo;
// A curriculo clicada é definida como a curriculo atual no formulário
}

cadastrar() {
// Função para cadastrar uma nova curriculo
this._curriculosService.cadastrarcurriculo(this.curriculo).subscribe(
() => {
// Após cadastrar com sucesso
this.curriculo = new Curriculo(0, '', '', '', 0); // Limpa o formulário
this.listarcurriculos(); // Atualiza a lista de curriculos
},
(err) => {
console.log('Erro ao cadastrar', err);
// Em caso de erro, exibe uma mensagem no console
}
);
}
