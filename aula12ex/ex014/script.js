function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <12){
        img.src = 'imagens/manhapq.png'
        document.body.style.background='#e9d0a8'
    }else if(hora >=12 && hora <=18){
        img.src = 'imagens/tardepq.png'
        document.body.style.background='#ad6130'
    }else{
        img.src = 'imagens/noitepq.png'
        document.body.style.background= '#03264c'
    }
        

  
    
}