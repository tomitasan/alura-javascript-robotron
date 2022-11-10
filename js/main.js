// const robotron = document.querySelector("#robotron");

// declaração de função anônima - não pode ser chamada em outros pontos
// robotron.addEventListener("click", function() {
//     console.log("Click no Robotron");
// });

// declaração de array function - função anônima
// robotron.addEventListener("click", () => {
//     console.log("Click no Robotron");
// });

// executa a função quando clicar na imagem
// robotron.addEventListener("click", dizOi);

// função com passagem de parâmetro
// function dizOi(nome) {
//     console.log("Oi, " + nome);
//     console.log("Bem vindo ao Robotron 2000");
// }

// executa a função ao carregar a pagina
// dizOi("Tomita");

// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");

// captura o Array de todas as classes controle-ajuste
// const controle = document.querySelectorAll(".controle-ajuste");

// usando parâmetro html data
const controle = document.querySelectorAll("[data-controle]");

// usando parâmetro html data
const estatisticas = document.querySelectorAll("[data-estatistica]")

// usando parâmetro html data
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    // console.log(elemento);
    // elemento.addEventListener("click", () => {
    //     console.log("funcionou")});

    elemento.addEventListener("click", (evento) => {
        // passando o parâmetro usando o dataset
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
});

// somar.addEventListener("click", () => {
//     // braco.value = parseInt(braco.value) + 1;
//     manipulaDados("somar");
// })

// subtrair.addEventListener("click", () => {
//     // braco.value = parseInt(braco.value) - 1;
//     manipulaDados("subtrair");
// })

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) +
        pecas[peca][elemento.dataset.estatistica]
    });
}