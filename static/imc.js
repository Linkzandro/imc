const resultado=document.getElementById('resultado')
const altura=document.getElementById('altura')
const peso=document.getElementById('peso')

const CalcularIMC = ()=>{

    let mensagem='';
    if(altura.value !='' && peso.value !=''){
        const imc=(peso.value/(altura.value*altura.value)).toFixed(2);
        

        if(imc<18.5){
            mensagem='Baixo Peso';
        } else if(imc<=24.9){
            mensagem='peso ideal';
        }else if(imc<=29.9){
            mensagem='sobrepeso';
        }else if(imc<=34.9){
            mensagem='Obesidade Grau I';
        }else if(imc<=39.9){
            mensagem='Obesidade Grau II';
        }else{
            mensagem='Obesidade Grau III'
        }

            mensagem=`${mensagem} com imc de ${imc}`;
    }else{
        mensagem='dados inválidos ou não preenchidos';

    }

    resultado.innerHTML=mensagem;
}