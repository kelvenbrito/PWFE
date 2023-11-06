export class Curriculo {
 // atributos
id: number=0;
nome: string='';
email: string='';
telefone: string='';
endereco: string='';
formacaoAcademica: string='';


constructor(
id: number,
nome: string,
email: string,
telefone: string,
endereco: string,
formacaoAcademica: string,

) {
this.id = id;
this.nome = nome;
this.email = email;
this.telefone = telefone;
this.endereco = endereco;
this.formacaoAcademica = formacaoAcademica;
}
}
