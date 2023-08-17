"use strict";
let numero = 200;
let segundonumero = 500;
console.log((numero + segundonumero) * 2);
let idadeNova = 17;
let textoNovo = "Minha idade é:";
let novo = " anos";
console.log(textoNovo + idadeNova + novo);
let verdadeiro = true;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log("Tamanho do array: " + arr.length);
console.log("Acessando a posição do array: " + arr[5]);
console.log("Buscando a posição do número: " + arr.indexOf(6));
let arrayText;
arrayText = ["ab", "cd", "ef", "gh"];
console.log(arrayText);
console.log("Tamanho do arrayText: " + arrayText.length);
console.log("Acessando a posição do array: " + arrayText[2]);
console.log("Buscando a posição no arrayText: " + arrayText.indexOf("cd"));
function exibirText() {
    console.log("Exibindo meu texto");
}
exibirText();
function exibindoOutroTexto() {
    return "Exibindo outro texto";
}
console.log(exibindoOutroTexto());
function retornaNumero() {
    return 10;
}
console.log(retornaNumero());
function retornaString() {
    return "abcde";
}
console.log(retornaString());
function soma(a, b) {
    return a + b;
}
console.log("Valor da soma é: " + soma(50, 1000));
//exercicios
function multiplicacao(a, b) {
    return a * b;
}
console.log("Valor da multilplicação: " + multiplicacao(2, 3));
function parametro(a, b, c) {
    return (a + b) * c;
}
console.log("Valor da operação dos parâmetros: " + parametro(2, 3, 4));
function retorna(a, b) {
    return "Resultado da multiplicação: " + (a * b);
}
console.log(retorna(2, 3));
