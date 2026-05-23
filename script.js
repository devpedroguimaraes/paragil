function criarCoracao(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerText = "💙";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    (Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
    (Math.random() * 4 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);
}

/* CRIA CORAÇÕES */
setInterval(criarCoracao, 400);

/* BOTÃO */
function mostrarMensagem(){

    const assinatura =
    document.getElementById(
        "assinatura"
    );

    assinatura.style.opacity = "1";

    alert(
        "Você continua sendo alguém muito especial 💙"
    );
}