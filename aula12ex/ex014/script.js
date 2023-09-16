
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 1
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora = 0){
        a.href = 'tardepq.jpg'
    }else{
        img.src = 'noite3.png'
    }
        

  
    
}