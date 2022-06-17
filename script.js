//constante vinho//
let vinhoUnitário = 70.00*3
const vinhoTotal = vinhoUnitário
console.log(vinhoTotal)

//*Declaramento das Variáveis//
let refrigerante = 3*11.99
let macarrão = 4*6.99
let ervilha	= 3*6.99
let arroz = 3*22.99
let feijão = 2*11.89
let total = refrigerante + macarrão + ervilha + arroz + feijão
countProducts()

//*Aplicação da Função e Condicionamento//

function countProducts(){
    if(total%2 == 0){
        let par = (total/2)
        console.log("$"+par + ", você pagará somente a metade e seu amigo pagará a metade mais o valor do vinho.")
    }
    else{
        let impar = (total/2) + vinhoTotal
        console.log("$"+impar + ", cada amigo deverá pagar metade do valor total da compra, incluindo o vinho.")
    }
    
}


///////////EXTRA/////////////

//refrigerante

let precoRefri = parseFloat(prompt("Digite o valor do Refrigerante"))
let qntRefri = parseInt(prompt("Quantas Unidades ?"))
let valorRefri = precoRefri * qntRefri
alert(`Valor total a ser pago: ${valorRefri}`)


//macarrao


let precoMc = parseFloat(prompt("Digite o valor do Macarrão"))
let qntMc = parseInt(prompt("Quantas Unidades ?"))
let valorMc = precoMc * qntMc
alert(`Valor total a ser pago: ${valorMc}`)

//ervilha


let precoErv = parseFloat(prompt("Digite o valor da Ervilha"))
let qntErv = parseInt(prompt("Quantas Unidades ?"))
let valorErv = precoErv * qntErv
alert(`Valor total a ser pago: ${valorErv}`)

//arroz


let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let qntArroz = parseInt(prompt("Quantas Unidades ?"))
let valorArroz = precoArroz * qntArroz
alert(`Valor total a ser pago: ${valorArroz}`)

//feijao


let precoFeijao = parseFloat(prompt("Digite o valor do Feijão"))
let qntFeijao = parseInt(prompt("Quantas Unidades ?"))
let valorFeijao = precoFeijao * qntFeijao
alert(`Valor total a ser pago: ${valorFeijao}`)

//vinho


let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let qntVinho = parseInt(prompt("Quantas Unidades ?"))
let valorVinho = precoVinho * qntVinho
alert(`Valor total a ser pago: ${valorVinho}`)