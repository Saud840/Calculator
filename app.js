function calculator (A){
    document.getElementById('inp').value += A;
}

function clearAll (){
    document.getElementById('inp').value = ''
}

function clearLastEntry() {
    var lastEntry = document.getElementById('inp').value;
    document.getElementById('inp').value = lastEntry.slice(0 , -1)
  }

function equal(){
    var Equal = document.getElementById('inp')
    Equal.value = eval(Equal.value)
}