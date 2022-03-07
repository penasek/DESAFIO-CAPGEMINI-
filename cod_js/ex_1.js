var arr = [9, 2, 1, 4, 6]

var ordenados = arr.sort()
var tamanhoArray = arr.length
var valorMediana
//se f r par entra no if
if (tamanhoArray % 2 == 0) {
  var posicaoValorMedio = tamanhoArray / 2
  var valorPosicaoMedia1 = ordenados[posicaoValorMedio - 1]
  var valorPosicaoMedia2 = ordenados[posicaoValorMedio]
  var somaNumerosMedianos = valorPosicaoMedia1 + valorPosicaoMedia2

  valorMediana = somaNumerosMedianos / 2
  //se for impar entra no else
} else {
  var posicaoValorMedio = (tamanhoArray + 1) / 2
  valorMediana = ordenados[posicaoValorMedio - 1]
}
console.log(valorMediana)

function copiarCodigo(){
  
}
