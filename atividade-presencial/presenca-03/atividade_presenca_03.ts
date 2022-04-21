class Stack{
    pilha: number[] = []
    top: number = -1
    maximoPilha = 4

    taVazio(): number{
        if(this.top == -1){
            return 1
        }else{
            return 0
        }
    }
    taCheio(): number{
        if(this.top == this.maximoPilha){
            return 1
        }else{
            return 0
        }
    }
    push(num: number): void{
        if(this.taCheio() == 1){
            console.log('Pilha está cheia')
        }else{
            this.top++
            this.pilha[this.top] = num
            console.log('Elemento '+num+' foi adicionado.')
        }
    }
    pop(): number | void{
        if(this.taVazio() == 1){
            console.log('Pilha vazia')
        }else{
            let aux = this.pilha[this.top]
            console.log('Elemento '+aux+' foi retirado.')
            this.top--
            return aux
        }
    }
    ver(): void{
        if(this.taVazio() == 1){
            console.log('Pilha está vazia')
         }else{
            for(let i = 0; i <= this.top; i++){
                console.log('Pilha tem elemento '+this.pilha[i])    
            }
        }
    }
}
let pilha: Stack = new Stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('-------------------------')
pilha.ver()
console.log('-------------------------')
pilha.pop()
pilha.pop()
console.log('-------------------------')
pilha.ver()
console.log('-------------------------')
pilha.pop()
pilha.pop()
console.log('-------------------------')
pilha.ver()