function criarCoracao() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💙";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(criarCoracao, 300);

function mostrarMensagem() {
    const assinatura = document.getElementById("assinatura");

    assinatura.style.opacity = "1";

    alert("Você continua sendo alguém muito especial 💙");
}