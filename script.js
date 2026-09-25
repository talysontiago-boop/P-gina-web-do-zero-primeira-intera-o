const botoes = document.querySelectorAll("button");
botoes.forEach(function(botao) {
    let curtiu = false;

    botao.addEventListener("click", function botaoClicado() {
        console.log("fui clicado");
        
        // Pega apenas o elemento <span> dentro do botão clicado
        let texto = botao.querySelector("span");

        if (!curtiu) {
            texto.textContent = Number(texto.textContent) + 1;
            curtiu = true;
        } else {
            texto.textContent = Number(texto.textContent) - 1;
            curtiu = false;
        }
    });
});