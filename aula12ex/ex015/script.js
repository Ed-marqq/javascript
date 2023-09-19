function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sx')
        var idade = ano - formAno.value
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
            }else if (idade< 21){
                //jovem
            }else if(idade <50){
                //adulto
            }else {
                //idoso
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
            }else if (idade< 21){
                //jovem
            }else if(idade <50){
                //adulto
            }else {
                //idoso
            }
        }
        
        
    }

}