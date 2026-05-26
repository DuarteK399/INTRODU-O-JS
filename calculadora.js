function calcularDesconto() {
    //Entrada
let valorOriginal = parseFloat(document.getElementById("valor").value);
let desconto = parseFloat(document.getElementById("desconto").value);
//Processamento
let valorDesconto = (valorOriginal * desconto) / 100;
let valorFinal = valorOriginal - valorDesconto;


//Saída
document.getElementById("resultado").textContent = "Valor final: R$" + valorFinal;

}