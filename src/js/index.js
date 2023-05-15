// esse é um vasco jfjfi

/* vasco é selecaoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
*/

//passo 1

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3
botaoAlterarTema.addEventListener("click", () => {

    //passo 6 
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro")
    
    if (modoEscuroEstaAtivo) {

        //passo 7
        body.classList.remove("modo-escuro");

        //passo 8
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        //passo 4
        body.classList.add("modo-escuro");

        //passo 5
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

});
