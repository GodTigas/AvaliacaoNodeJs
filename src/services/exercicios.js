class ServiceCalculadora {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não é um número.")
        }
        const resultado = num1 + num2

        return resultado;
    }

    Subtrair(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error ("Não é um número.")
        }
        const resultado = num1 - num2

        return resultado;
    }

    Multiplicar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não é um número.")
        }
        
        if(num1 == 0){
            throw new Error("0 não é multiplicável.")
        }
        const resultado = num1 * num2

        return resultado;    
    }

    Dividir(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não é um número.")
        }

        if(num2 == 0){
            throw new Error("Não é possível dividir por 0.")
        }
        const resultado = num1 / num2

        return resultado;
    }

}
module.exports = ServiceCalculadora