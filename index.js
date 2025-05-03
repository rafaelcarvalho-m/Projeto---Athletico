function formulario(){
    let idade = prompt("Qual é a sua idade?");

    if (idade >= 18) {
        alert("Fique à vontade para explorar o site do furacão!");
        window.open("produtos.html", "_blank");
    } else {
        alert("Você não pode seguir por ser menor de idade. Entre com a ajuda de um responsável!");
    }
}
