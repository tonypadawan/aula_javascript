function contar(){
    let caixaInicio = Number(document.getElementById('inicio').value)
    let caixaFim = Number(document.getElementById('fim').value)
    let caixaPasso = Number(document.getElementById('passo').value)
    let mensagem = document.querySelector('div#mensagem')

    if(caixaInicio == 0 || caixaFim == 0 || caixaFim < caixaInicio){
        mensagem.innerHTML = 'Impossivel Contar!'
    }else{

        if(caixaPasso == 0){
            alert('Passo inválido! Considerando Passo 1')
            caixaPasso = 1
        }

        mensagem.innerHTML = 'Contando: <br>'

        for(caixaInicio; caixaInicio <= caixaFim; caixaInicio += caixaPasso){
            mensagem.innerHTML += `${caixaInicio} 👉 `
        }
        mensagem.innerHTML += '🏁'
    }
        
}