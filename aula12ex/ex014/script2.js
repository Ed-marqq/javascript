function carregar(){
    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = 5

    msg.innerHTML= `Agora são ${hora} horas`

    if( hora >=5){
        img.src= 'imagens/manhapq.jpg'
    }
}