let numero: number = 200;
let segundonumero : number = 500;
console.log((numero + segundonumero)*2);

let idadeNova: number = 17;
let textoNovo: string = "Minha idade é:";
let novo: string = " anos";
console.log(textoNovo+idadeNova+novo);

let verdadeiro: boolean = true;
console.log(verdadeiro);


let arr: number[] = [1,2,3,4,5,6,7];
console.log(arr);
console.log("Tamanho do array: "+arr.length);
console.log("Acessando a posição do array: "+arr[5]);
console.log("Buscando a posição do número: "+arr.indexOf(6));


let arrayText: Array<string>;
arrayText = ["ab", "cd", "ef", "gh"];
console.log(arrayText);
console.log("Tamanho do arrayText: "+arrayText.length);
console.log("Acessando a posição do array: "+arrayText[2]);
console.log("Buscando a posição no arrayText: "+arrayText.indexOf("cd"));


function exibirText(){
    console.log("Exibindo meu texto");
}
exibirText();


function exibindoOutroTexto(){
    return "Exibindo outro texto";
}

console.log(exibindoOutroTexto());


function retornaNumero():number{
    return 10;
}
console.log(retornaNumero());


function retornaString():string{
    return "abcde";
}
console.log(retornaString());


function soma(a:number, b:number):number{
    return a+b;
}
console.log("Valor da soma é: "+soma(50, 1000));




//exercicios

function multiplicacao(a:number, b:number):number{
    return a*b;
}
console.log("Valor da multilplicação: "+multiplicacao(2,3));

function parametro(a:number, b:number, c:number):number{
    return (a+b)*c;
}
console.log("Valor da operação dos parâmetros: "+parametro(2,3,4));

function retorna(a:number, b:number):string{
    return "Resultado da multiplicação: " +(a*b);
}
console.log(retorna(2,3));

