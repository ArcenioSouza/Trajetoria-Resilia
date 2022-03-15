import ehPar from "../index.js";
import { deepEqual } from 'assert';

describe('Verificação de numeros', () => {

   it('deve verificar se o numero é par', () => {
      const expected = true
      const resultado = ehPar(4)
      deepEqual(resultado, expected)
   })
})