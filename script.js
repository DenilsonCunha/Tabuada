function tabuada() {
    let valor = document.getElementById('num')
   let tab = document.getElementById('seltab')
  if (valor.value.length == 0) {
        alert('Por favor, Digite um número!')
} else {
    var n = Number(valor.value)
    var c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      var item = document.createElement('option')
      item.text = `${n} * ${c} = ${c*n}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}