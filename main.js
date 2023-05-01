//FUNÇÃO ALTERNAR OPÇÕES
const escolha = document.querySelector('.escolha');
escolha.addEventListener('click', () => {
    escolha.value = '';
});

function escolhaTita() {
    var texto;
    var tita = document.querySelector("#titas").value;
    



    switch (tita) {
        case "Titã Fundador":

            texto = "Ligado a todos os outros titãs, o Titã Fundador consegue controlar as mentes das demais criaturas. Ele não apenas consegue forçar outros titãs a realizarem ações específicas como também alterar as memórias deles.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://media.tenor.com/D-ZQdqEo5GwAAAAd/eren-founding-titan.gif" id="texto-tita">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã de Ataque":
            texto = "Sempre pronto para o combate, o Titã de Ataque talvez esteja entre os mais simples quando capacidades físicas são o assunto. Contudo, o humano que o controla tem acesso às memórias de outras pessoas que o controlaram ou controlarão.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://media.tenor.com/EbvSVst5ZBEAAAAC/attack-titan-eren.gif">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Colossal":
            texto = "Mais alto do que quase todos os outros titãs. Os poderes dele incluem emitir uma fumaça extremamente quente e ter uma força bruta descomunal.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://steamuserimages-a.akamaihd.net/ugc/90472828870081415/A0428E283BB16DBC3D1D71B83389EA9B40A0161C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Fêmea":
            texto = "Além de todos os atributos físicos tradicionais dos titãs, a Titã Fêmea consegue copiar habilidades de outras criaturas consumindo pedaços dos corpos delas.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://comicvine.gamespot.com/a/uploads/original/11143/111432170/8170168-tumblr_n67i3wkwod1szl458o1_500.gif">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Blindado":
            texto = "Além de possuir o corpo cheio de áreas com uma proteção extremamente reforçada, o Titã Blindado pode transformar parte das mãos em garras para escalar e lutar.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://media.tenor.com/GUUJ-sD9q9UAAAAC/reiner-braun-reiner-attack-on-titan.gif">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Bestial":
            texto = "Mais animalesco do que todos os outros titãs, o Titã Bestial se assemelha a diferentes animais dependendo de quem o conquista. As habilidades dele incluem falar como um ser humano mesmo transformado, arremessar objetos com um precisão absurda e endurecer a própria carne.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://pa1.narvii.com/7417/c178b72d0820d805a40f22897f8255e1c895e767r1-444-250_hq.gif">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Mandíbula":
            texto = "O Titã Mandíbula é menor do que os demais. Contudo, trata-se de uma criatura muito mais rápida, com dentes afiados e garras capazes de quebrar praticamente qualquer coisa.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://media.tenor.com/7Dd4JWf_sI4AAAAC/attack-on-titan-jaw-titan.gif">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Carroça":
            texto = "O Titã da Carroça não está entre os mais perigosos quando sozinho, mas pode fazer muita diferença ao servir como suporte para aliados. Também pode servir para transportar muitas outras coisas, além de pessoas derrotadas.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://i.pinimg.com/originals/d5/80/b2/d580b298956aa62e64456335add2bb18.gif">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        case "Titã Martelo de Guerra":
            texto = "Os poderes dele incluem transformar o próprio corpo em diversas armas e ser controlado à distância pelo usuário em casos nos quais é mais inteligente estar longe da criatura.";
            document.getElementById("imagem").innerHTML = '<img class="fundador" src="https://qph.cf2.quoracdn.net/main-qimg-36c261835c06226dae339570c1206a06">';
            document.getElementById("btn").innerHTML = '<button class="buscarbtn">Limpar</button>';
            document.querySelector('.buscarbtn').addEventListener('click', limparTela);
            document.getElementById("frase").scrollIntoView({ behavior: 'smooth' });
            break;

        default:
            texto = "Insira um Titã existente"
    }

    document.querySelector("#frase").innerHTML = texto



}

function limparTela() {
    document.getElementById("frase").innerHTML = "";
    document.getElementById("imagem").innerHTML = "";
    document.getElementById("btn").innerHTML = "";
}

var input = document.getElementById("titas");

input.addEventListener("focus", function() {
  input.placeholder = "";
});

input.addEventListener("blur", function() {
  if (input.value == "") {
    input.placeholder = "Clique aqui";
  }
});
