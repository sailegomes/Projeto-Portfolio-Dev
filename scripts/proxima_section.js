document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector(".seta_mudanca_secao");
    if (botao) { // Verifica se o elemento existe antes de adicionar o evento
        botao.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 850, behavior: "smooth" });
        });
    }
});