class Fila{
    Pessoas: string[] = []
    maximoFila = 5
    fim = 0
    nFirst = 0
    nItems = 0

    taVazio(): number{
        if(this.nItems == 0){
            return 1
        }else{
            return 0
        }
    }
    taCheio(): number{
        if(this.fim == this.maximoFila){
            return 1
        }else{
            return 0
        }
    }

    adicionarFila(nome: string): void{
        if(this.taCheio() == 1){
            console.log('Fila está cheia!')
        }else{
            this.Pessoas[this.fim] = nome
            console.log(nome+' entrou na fila')
            this.fim++
            this.nItems++
        }
    }
    removerFila():string | void {
        if(this.taVazio() == 1){
            console.log('A fila está vazia!')
        }else{
            let temp = this.Pessoas[this.nFirst]
            console.log(this.Pessoas[this.nFirst]+' saiu da fila')
            this.nFirst++
            this.nItems--
            return temp
        }
    }
    verFila(): void{
        if(this.taVazio() == 1){
            console.log('Fila não tem ninguém!')
        }else{
            let np = this.nFirst
            for(let i=0; i < this.nItems; i++){
                console.log(this.Pessoas[np]+' está na fila')
                np++
            }
        }
    }
}
let fila: Fila = new Fila()

fila.adicionarFila('João Pedro')
fila.adicionarFila('Henrique')
fila.adicionarFila('Paulo')
fila.adicionarFila('João')
console.log('-------------------------')
fila.removerFila()
fila.removerFila()
fila.removerFila()
console.log('-------------------------')
fila.adicionarFila('Larissa')
console.log('-------------------------')
fila.verFila()
console.log('-------------------------')
fila.removerFila()
fila.removerFila()
console.log('-------------------------')
fila.verFila()