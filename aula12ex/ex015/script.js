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
                img.setAttribute('src', 'criancam.png')
                res.innerHTML = `Detectamos criança com ${idade} anos`

            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.png')
                res.innerHTML = `Detectamos um jovem com ${idade} anos`
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultom.png')
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
            }else {
                //idoso
                img.setAttribute('src', 'idosom.png')
                res.innerHTML = `Detectamos um idoso com ${idade} anos`
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancaf.png')
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemf.png')
                res.innerHTML = `Detectamos uma jovem com ${idade} anos`
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultof.png')
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
            }else {
                //idoso
                img.setAttribute('src', 'idosof.png')
                res.innerHTML = `Detectamos uma idosa com ${idade} anos`
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

        
        
    }

}