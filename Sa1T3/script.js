// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {

    // Instacia os valores a variaveis
    const elevador1 = document.querySelector('.elevador1');
    const elevador2 = document.querySelector('.elevador2');
    var predio = document.querySelector('.predio').clientHeight;

    const botoes = document.querySelectorAll('.b1');
    const botoes2 = document.querySelectorAll('.b2');

    const modal = document.getElementById("myModal");
    const pred = document.querySelector('.predio');

    // Adiciona listeners de evento para os botões da classe b1
    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            // Obtém o andar associado ao botão clicado
            const andar = this.parentElement.id;
            const painel = false; // Define painel como false para botões com a classe b1
            const elevadorEscolha = false;
            // Chama a função para mover o elevador
            moverElevador(andar, painel, elevadorEscolha);
        });
    });

  
    // Adiciona listeners de evento para os botões da classe b2
    botoes2.forEach(botao => {
        botao.addEventListener('click', function () {
            // Esconde o modal, restaura a opacidade do fundo e a cor de fundo do corpo
            modal.style.display = "none";
            pred.style.opacity = "1";
            document.body.style.backgroundColor = "#FFFFFF";
            // Obtém o andar associado ao botão clicado
            const andar = this.id.replace("", ""); // Remove o prefixo "andarb" para obter o número do andar
            const painel = true;
             const elevadorEscolha = true;
            // Chama a função para mover o elevador
            moverElevador(andar, painel, elevadorEscolha);
        });
    });

    // Função para mover o elevador
    function moverElevador(andar, painel, elevadorEscolha) {
        // Definição das posições dos andares
        const posicoes = {
            '1': 450,
            '2': 380,
            '3': 300,
            '4': 180,
            '5': 100,
            '6': 30,
            'T': 550,
            'SA1': 620,
            'SA2': 680
        };

        // Destino do elevador com base no andar selecionado
        const destino = posicoes[andar];

        // Obtém a posição atual dos elevadores
        const posicaoAtual1 = parseInt(elevador1.style.top) || predio;
        const posicaoAtual2 = parseInt(elevador2.style.top) || predio;

        // Calcula a distância que cada elevador precisa percorrer
        const distancia1 = Math.abs(destino - posicaoAtual1);
        const distancia2 = Math.abs(destino - posicaoAtual2);
        

        // Move o elevador mais próximo do destino
        if (!elevadorEscolha) {
         
              if (distancia1 < distancia2) {
            moverElevadorIndividual(elevador1, destino);
            // Salva a escolha do último elevador
            ultimoElevadorEscolhido = elevador1;
        } else {
            moverElevadorIndividual(elevador2, destino);
            // Salva a escolha do último elevador
            ultimoElevadorEscolhido = elevador2;
        }
        }else{
            moverElevadorIndividual(ultimoElevadorEscolhido, destino);
        }

        // Após o elevador chegar ao destino, mostra o modal e torna o fundo transparente
        setTimeout(() => {
            if (!painel) {
                // Se não for um botão b2, execute o código para mostrar o modal e tornar o fundo transparente
                pred.style.opacity = "0"; // Configura a opacidade do fundo para 0 (transparente)
                modal.style.display = "block";
                document.body.style.backgroundColor = "#525252 ";
                painel = true;
               
            }
        }, Math.max(distancia1, distancia2) * 4);
    }

    // Função para mover um elevador individual para um destino específico
    function moverElevadorIndividual(elevador, destino) {
        // Obtém a posição atual do elevador
        const posicaoAtual = parseInt(elevador.style.top) || predio;

        // Calcula a distância que o elevador precisa percorrer
        const distancia = Math.abs(destino - posicaoAtual);

        // Define a duração da transição com base na distância 
        const duracao = distancia * 4 + 'ms';

        // Configura as propriedades de transição para a animação suave
        elevador.style.transition = `top ${duracao} ease-in-out`;

        // Move o elevador para o destino
        elevador.style.top = destino + 'px';

         // Limpa as transições após o término da animação
         setTimeout(() => {
            elevador.style.transition = 'none';
        }, parseFloat(duracao));
    }
});
