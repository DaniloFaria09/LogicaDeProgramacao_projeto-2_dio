saldoDeVitorias (54, 37)
nivelHeroi()
main()

function main(){
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`)
}

function saldoDeVitorias (vitorias, derrotas){
    saldo = vitorias - derrotas;
}

function nivelHeroi(){
    if (saldo < 10){
        nivel = "FERRO";
    }else if(saldo >= 10 && saldo < 20){
        nivel = "BRONZE";
    }else if(saldo >= 20 && saldo < 50){
        nivel = "PRATA";
    }else if(saldo >= 50 && saldo < 80){
        nivel = "OURO";
    }else if(saldo >= 80 && saldo < 90){
        nivel = "DIAMANTE";
    }else if(saldo >= 90 && saldo < 100){
        nivel = "LENDÁRIO";
    }else{
        nivel = "IMORTAL"
    }   
}










