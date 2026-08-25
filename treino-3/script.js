function Validar() {
    // Variaveis do HTML
    let not = document.getElementById('itxn')
    let res = document.getElementById('res')
    let n = Number(not.value)
    
    if (n > 10 || n < 0) {
        // Validacao da nota
        res.innerHTML = `Insira uma nota de 0 a 10`
    } else if (n < 3) {
        // Nota abaixo de 3
        res.innerHTML = `Nota HORRIVEL desista 🤮 `
        
    } else if (n < 5) {
       // Nota abaixo de 5
        res.innerHTML = `Nota ruim 🫩`
    } else if (n <= 7){
       // nota abaixo ou igual a 7
        res.innerHTML = `Nota boa 🙂`
    } else if (n <= 10) { 
       // nota abaixo ou igual a 10 
        res.innerHTML = `Nota otima tirou onda ✅✅✅✅✅`
    }
        
}