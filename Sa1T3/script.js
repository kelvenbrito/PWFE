document.addEventListener('DOMContentLoaded', function () {
    const elevador1 = document.querySelector('.elevador1');
    const elevador2 = document.querySelector('.elevador2');
    var predio = document.querySelector('.predio').clientHeight;

    const botoes = document.querySelectorAll('.b1');

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const andar = this.parentElement.id;
            moverElevador(andar);
        });
    });

    function moverElevador(andar) {
        const posicoes = {
            'andar1': 450,
            'andar2': 380,
            'andar3': 300,
            'andar4': 180,
            'andar5': 100,
            'andar6': 30,
            'andarT': 550,
            'andarSA1': 620,
            'andarSA2': 680
        };

        const destino = posicoes[andar];

        // Obtém a posição atual dos elevadores
        const posicaoAtual1 = parseInt(elevador1.style.top) || predio;
        const posicaoAtual2 = parseInt(elevador2.style.top) || predio;

        // Calcula a distância que cada elevador precisa percorrer
        const distancia1 = Math.abs(destino - posicaoAtual1);
        const distancia2 = Math.abs(destino - posicaoAtual2);

        // Move o elevador mais próximo do destino
        if (distancia1 < distancia2) {
            moverElevadorIndividual(elevador1, destino);
        } else {
            moverElevadorIndividual(elevador2, destino);
        }
    }

    function moverElevadorIndividual(elevador, destino) {
        // Obtém a posição atual do elevador
        const posicaoAtual = parseInt(elevador.style.top) || predio;

        // Calcula a distância que o elevador precisa percorrer
        const distancia = Math.abs(destino - posicaoAtual);

        // Define a duração da transição com base na distância (quanto maior, mais tempo)
        const duracao = distancia * 2 + 'ms';

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
