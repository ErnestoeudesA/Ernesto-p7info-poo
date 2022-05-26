import { Ponto } from "./Ponto"
import { Quadrilatero } from "./Quadrilatero"

let A = new Ponto(0, 8)
let B = new Ponto(10, 0)

let C = new Ponto(4, 3)
let D = new Ponto(10, 5)
let E = new Ponto(11, 6)

let Verificar = new Quadrilatero(A, B)

console.log(Verificar.isInside(C)? "Ponto C está dentro do Quadrilátero": "Ponto C não está dentro do Quadrilátero")
console.log(Verificar.isInside(D)? "Ponto D está dentro do Quadrilátero": "Ponto D não está dentro do Quadrilátero")
console.log(Verificar.isInside(E)? "Ponto E está dentro do Quadrilátero": "Ponto E não está dentro do Quadrilátero")