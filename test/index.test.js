const { describe, expect, it } = require('@jest/globals');
const ServiceCalculadora = require('../src/services/exercicios.js');

describe('Testes do primeiro exercício', () => {
   
   const service = new ServiceCalculadora()

   it('Somar 1 número e uma letra', () => {
      const funcao = () => service.Somar(1, 'a' )
      

      expect(funcao).toThrowError("Não é um número");

   })

    it('Diminuir 2 números e esperar 1 negativo', () => {
        const result = service.Subtrair(1, 2)
        
        expect(result).toBe(-1);
        
    
    it('Dividir 0 por algum número', () => {
        const result = () => service.Dividir(2, 0)
        
        expect(result).toThrowError("Não é possível dividir por 0.");
        
    })
    
})