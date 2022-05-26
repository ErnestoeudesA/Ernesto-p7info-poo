import { Ponto } from './Ponto'
export class Quadrilatero {
    private A: Ponto
    private B: Ponto

    constructor(A: Ponto, B: Ponto) {
        this.A = A
        this.B = B
    }

    isInside(ponto: Ponto): boolean{
        if(this.A.getXPoint <= ponto.getXPoint && ponto.getXPoint <= this.B.getXPoint
             && this.B.getYPoint <= ponto.getYPoint && ponto.getYPoint <= this.A.getYPoint  ) {
                 return true
             } else {
                 return false
             }
    }
}