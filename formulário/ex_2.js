var n = []

function limparLista() {
  n = []
  document.getElementById('lista').innerHTML = ''
  document.getElementById('resultado').innerHTML = ''
  document.getElementById('inputNumero').value = ''
  document.getElementById('valorX').value = ''
}

function adicionarValor() {
  var valorinput = document.getElementById('inputNumero').value
  console.log(valorinput)

  if (valorinput) {
    n.push(parseInt(valorinput))
    renderizarListaArray()
  } else {
    alert('Valor não pode ser vazio e deve ser numero')
  }
  document.getElementById('inputNumero').value = ''
}

function renderizarListaArray() {
  var lista = document.getElementById('lista')
  var itensLista = n.map(itemArray => {
    return `| ${itemArray} |`
  })
  lista.innerHTML = itensLista.join('')
}

function resultado() {
  var tamanhoarray = n.length
  var x = parseInt(document.getElementById('valorX').value)
  var novoarray = []
  if (!x) {
    alert('É preciso escolher valor de X')
    return
  }
  if (n.length == 0) {
    alert('Lista esta vazia')
    return
  }

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

  var resultado = document.getElementById('resultado')
  resultado.innerHTML = novoarray.length
  console.log(novoarray)
}
