//
//
//
//
import { Console } from "console";
import {Cliente} from "./cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";
export class NotaFiscal {

    /* Atributos */
    id: number;
    codigo:number; 
    data: Date;
    cliente: Cliente;
    items :  Array<ItemNotaFiscal>;  
    valorNota : number;

    /* Métodos */

    /* Método Construtor */    
    constructor (id : number, codigo: number, cliente : Cliente ) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date(); 
        this.cliente = cliente; 
        this.valorNota =0.0;
        this.items = new Array<ItemNotaFiscal>();


    }

    /* Métodos Acessores */
    getid(): number {
        return this.id;
    }

    getcodigo(): number {
        return this.codigo;
    }

    getdata(): Date {
        return this.data;
    }

    /* Métodos Modificadores */     
    setcodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setdata(data : Date) : void {
        this.data = data;
    }

     

    adicionarItem(item: ItemNotaFiscal) {
         this.items.push(item);
    }

    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() : void {
        let val = 0
        for(let i = 0; i < this.items.length; i++) {
            let valQnt = this.items[i].getquantidade()*this.items[i].getvalor()
            val += valQnt;
        }
        console.log("Valor total da nota retirada: " + val)
    }

    // Imprimir a NotaFiscal conforme o Layout definido
    
    imprimirNotaFiscal(): void {
        var data = new Date();
        console.log("---------------------------------------------------------------------")
        console.log("NOTA FISCAL                                            ", data)
        console.log("CLIENTE:", this.cliente.getcodigo(), "|", "Nome: ", this.cliente.getnome())
        console.log("CPF: ", this.cliente.getcnpjcpf())
        console.log("---------------------------------------------------------------------")
        console.log("ITENS")
        console.log("---------------------------------------------------------------------")
        console.log("SEQ    DESCRIÇÃO                           QTD     VALOR UNIT   PREÇO")
        console.log("---------------------------------------------------------------------")
        for(let count = 0; count < this.items.length; count++) {
            let precoTotal = this.items[count].getquantidade() * this.items[count].produto.getvalorUnitario()
            this.valorNota += precoTotal
            console.log("%i    %s                           %f     %f   %f",
            this.items[count].getsequencial(), this.items[count].produto.getdescricao(), this.items[count].getquantidade(), this.items[count].produto.getvalorUnitario(), this.items[count].getvalor())
        }
        console.log("---------------------------------------------------------------------")
        console.log("Valor total: ", this.valorNota)
    }

    
}