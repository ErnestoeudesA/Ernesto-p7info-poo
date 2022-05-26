export class Ponto {
    private x: number = 0
    private y: number = 0

    constructor(x: number, y:number){
        this.x = x
        this.y = y
    }

    get getXPoint(){
        return this.x
    }

    get getYPoint(){
        return this.y
    }

    set setXPoint(x: number){
        this.x = x
    }

    set setYPoint(y: number){
        this.y = y
    }
}