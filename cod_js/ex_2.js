var n = [1, 5, 3, 4, 2]
var tamanhoarray = n.length
var x = 2
var novoarray = []

for (i = 0; i < tamanhoarray; i++) {
  var valoratual = n[i]
  var proximoNumero = valoratual + x

  for (j = 0; j < tamanhoarray; j++) {
    var valoratualdoj = n[j]
    if (proximoNumero == valoratualdoj) {
      novoarray.push([valoratual, proximoNumero])
    }
  }
}

console.log(novoarray)
console.log(novoarray.length)
