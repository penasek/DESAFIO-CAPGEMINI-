var arr = []

function limparLista() {
  arr = []
  document.getElementById('lista').innerHTML = ''
  document.getElementById('resultado').innerHTML = ''
  document.getElementById('inputNumero').value = ''
}

function adicionarValor() {
  var valorinput = document.getElementById('inputNumero').value
  console.log(valorinput)

  if (valorinput) {
    arr.push(parseInt(valorinput))
    renderizarListaArray()
  } else {
    alert('Valor não pode ser vazio e deve ser numero')
  }
  document.getElementById('inputNumero').value = ''
}

function renderizarListaArray() {
  var lista = document.getElementById('lista')
  var itensLista = arr.map(itemArray => {
    return `<li>${itemArray}</li>`
  })
  lista.innerHTML = itensLista.join('')
}

function resultado() {
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

  var resultado = document.getElementById('resultado')
  resultado.innerHTML = valorMediana
  console.log(valorMediana)
}
